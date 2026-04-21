const crypto = require("crypto");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const clientEmail = process.env.VITE_GOOGLE_CLIENT_EMAIL;
  const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "";
  const privateKey = Buffer.from(privateKeyB64, "base64").toString("utf8");
  const SHEET_ID = "1i3sMX8AoOTngLt6DLJdCUGYjDUPMer7nKLTF-4UtxGg";

  if (!clientEmail || !privateKey.includes("BEGIN PRIVATE KEY")) {
    return res.status(500).json({ error: "Missing credentials" });
  }

  try {
    const now = Math.floor(Date.now() / 1000);
    const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
    const header = b64url({ alg: "RS256", typ: "JWT" });
    const payload = b64url({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    });

    const signingInput = `${header}.${payload}`;
    const sign = crypto.createSign("RSA-SHA256");
    sign.update(signingInput);
    const signature = sign.sign(privateKey, "base64url");
    const jwt = `${signingInput}.${signature}`;

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });
    const { access_token } = await tokenRes.json();
    if (!access_token) return res.status(500).json({ error: "No access token" });

    const range = encodeURIComponent("A3:K2000");
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}`;
    const sheetRes = await fetch(url, { headers: { Authorization: `Bearer ${access_token}` } });
    const sheetData = await sheetRes.json();

    if (sheetData.error) return res.status(500).json({ error: "Sheets API error", details: sheetData.error });

    const rows = sheetData.values || [];

    const coachMap = {
      "chris": "Chris C", "chris c": "Chris C", "chris carlsen": "Chris C",
      "kostas": "Kostas", "andrew": "Andrew", "hayley": "Hayley",
      "nick": "Nick", "elijah": "Elijah", "troy": "Troy",
      "ricky": "Ricky", "chris e": "Chris E",
    };

    // Statuses to exclude
    const excludeStatuses = new Set(["inactive", "n/a", ""]);

    const members = [];
    const seen = new Set();

    for (const row of rows) {
      const firstName = (row[2] || "").trim();
      const lastName = (row[3] || "").trim();
      const status = (row[9] || "").trim().toLowerCase();
      const coachRaw = (row[10] || "").trim().toLowerCase();

      if (!firstName || !lastName) continue;
      if (excludeStatuses.has(status)) continue;
      if (firstName === "First Name") continue; // skip header row if included

      const coachKey = coachRaw;
      if (!(coachKey in coachMap)) continue;

      const key = `${firstName.toLowerCase()} ${lastName.toLowerCase()}`;
      if (seen.has(key)) continue;
      seen.add(key);

      members.push({ firstName, lastName, coach: coachMap[coachKey] });
    }

    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
