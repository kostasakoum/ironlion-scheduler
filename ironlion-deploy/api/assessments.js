const crypto = require("crypto");
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const clientEmail = process.env.VITE_GOOGLE_CLIENT_EMAIL;
  const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "";
  const privateKey = Buffer.from(privateKeyB64, "base64").toString("utf8");
  if (!clientEmail || !privateKey.includes("BEGIN PRIVATE KEY")) {
    return res.status(500).json({ error: "Missing credentials" });
  }
  try {
    const now = Math.floor(Date.now() / 1000);
    const b64url = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
    const header = b64url({ alg: "RS256", typ: "JWT" });
    const payload = b64url({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/calendar.readonly",
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
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;
    if (!accessToken) {
      return res.status(500).json({ error: "Failed to get access token", details: tokenData });
    }

    // Calendar configs: dedicated assessments calendar (no filter needed),
    // main calendar searched with both known assessment event title patterns
    const calendarConfigs = [
      { id: "ddd1u1g5ibth6hqtc8l6k5g1oo@group.calendar.google.com", queries: [null] },
      { id: "ironlionstrong@gmail.com", queries: ["Iron Lion Movement Screen", "Iron Lion Events"] },
    ];

    const timeMin = new Date();
    timeMin.setDate(timeMin.getDate() - 1);
    const timeMax = new Date();
    timeMax.setDate(timeMax.getDate() + 60);

    const assessments = {};
    const seenEventIds = new Set();

    for (const cal of calendarConfigs) {
      for (const q of cal.queries) {
        const params = new URLSearchParams({
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          singleEvents: "true",
          orderBy: "startTime",
        });
        if (q) params.append("q", q);

        const eventsRes = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(cal.id)}/events?${params}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const eventsData = await eventsRes.json();

        for (const event of (eventsData.items || [])) {
          if (!event.start?.dateTime) continue;
          if (seenEventIds.has(event.id)) continue; // deduplicate across queries
          seenEventIds.add(event.id);

          const dtStr = event.start.dateTime;
          const timePart = dtStr.match(/T(\d{2}):(\d{2}):/);
          const hour = timePart ? parseInt(timePart[1]) : 0;
          const isHalfHour = timePart ? parseInt(timePart[2]) === 30 : false;
          const dateStr = dtStr.split("T")[0];
          const member = (event.summary || "").split(" - ")[0].trim();
          if (!member) continue;

          if (!assessments[dateStr]) assessments[dateStr] = [];
          const existing = assessments[dateStr].find(a => a.hour === hour);
          if (existing) {
            if (!existing.members) { existing.members = [existing.member, null]; delete existing.member; }
            if (isHalfHour) existing.members[1] = member; else existing.members[0] = member;
          } else {
            assessments[dateStr].push(isHalfHour ? { hour, members: [null, member] } : { hour, member });
          }
        }
      }
    }

    res.status(200).json(assessments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
