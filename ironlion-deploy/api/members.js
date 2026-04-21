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
    // Get access token (same JWT flow as assessments)
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

    // Fetch sheet data — columns A:K (Order through ME COACH), starting row 3
    const range = encodeURIComponent("A3:K");
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}`;
    const sheetRes = await fetch(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const sheetData = await sheetRes.json();
    const rows = sheetData.values || [];

    // Row 0 is the header, data starts at row 1
    // Cols: 0=Order, 1=ID, 2=First Name, 3=Last Name, 9=Status, 10=ME COACH
    const members = [];
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const firstName = (row[2] || "").trim();
      const lastName = (row[3] || "").trim();
      const status = (row[9] || "").trim();
      const coach = (row[10] || "").trim();

      if (!firstName || !lastName) continue;
      if (status.toLowerCase() === "inactive") continue;

      // Normalize coach name
      const coachMap = {
        "chris": "Chris C", "chris c": "Chris C", "chris carlsen": "Chris C",
        "kostas": "Kostas", "andrew": "Andrew", "hayley": "Hayley",
        "nick": "Nick", "elijah": "Elijah", "troy": "Troy",
        "ricky": "Ricky", "chris e": "Chris E",
        "n/a": null, "jason": null,
      };
      const coachKey = coach.toLowerCase();
      if (coachKey in coachMap && coachMap[coachKey] === null) continue; // skip unassigned
      const normalizedCoach = coachMap[coachKey] || coach;

      members.push({ firstName, lastName, coach: normalizedCoach });
    }

    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
