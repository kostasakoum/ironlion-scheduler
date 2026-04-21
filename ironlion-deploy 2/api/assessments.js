// Vercel serverless function — fetches assessments from Google Calendar
// Uses service account credentials stored as environment variables

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const clientEmail = process.env.VITE_GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.VITE_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    return res.status(500).json({ error: "Missing credentials" });
  }

  try {
    // Create JWT for Google OAuth
    const now = Math.floor(Date.now() / 1000);
    const header = { alg: "RS256", typ: "JWT" };
    const payload = {
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/calendar.readonly",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    };

    const b64 = (obj) => Buffer.from(JSON.stringify(obj)).toString("base64url");
    const signingInput = `${b64(header)}.${b64(payload)}`;

    // Sign with private key using Node crypto
    const { createSign } = await import("crypto");
    const sign = createSign("RSA-SHA256");
    sign.update(signingInput);
    const signature = sign.sign(privateKey, "base64url");
    const jwt = `${signingInput}.${signature}`;

    // Exchange JWT for access token
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

    // Fetch from both calendar IDs
    const calendarIds = [
      "ddd1u1g5ibth6hqtc8l6k5g1oo@group.calendar.google.com",
      "ironlionstrong@gmail.com",
    ];

    const timeMin = new Date();
    timeMin.setDate(timeMin.getDate() - 1);
    const timeMax = new Date();
    timeMax.setDate(timeMax.getDate() + 60);

    const assessments = {};

    for (const calId of calendarIds) {
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events?` +
        new URLSearchParams({
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          q: calId === "ironlionstrong@gmail.com" ? "Iron Lion Movement Screen" : "",
          singleEvents: "true",
          orderBy: "startTime",
        });

      const eventsRes = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const eventsData = await eventsRes.json();

      for (const event of eventsData.items || []) {
        if (!event.start?.dateTime) continue;
        const dt = new Date(event.start.dateTime);
        const dateStr = dt.toISOString().split("T")[0];
        const hour = dt.getHours();

        // Extract member name from event title (e.g. "Alex - Iron Lion Movement Screen" or "Alex")
        const title = event.summary || "";
        const member = title.split(" - ")[0].trim();
        if (!member) continue;

        const isHalfHour = dt.getMinutes() === 30;

        if (!assessments[dateStr]) assessments[dateStr] = [];

        // Check if there's already an entry for this hour
        const existing = assessments[dateStr].find(a => a.hour === hour);
        if (existing) {
          // Second assessment at same hour — make it a :30 slot
          if (!existing.members) existing.members = [existing.member, null];
          delete existing.member;
          if (isHalfHour) existing.members[1] = member;
          else existing.members[0] = member;
        } else {
          if (isHalfHour) {
            assessments[dateStr].push({ hour, members: [null, member] });
          } else {
            assessments[dateStr].push({ hour, member });
          }
        }
      }
    }

    res.status(200).json(assessments);
  } catch (err) {
    console.error("Assessment fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}
