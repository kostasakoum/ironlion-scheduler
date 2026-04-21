import { GoogleAuth } from 'google-auth-library';

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const clientEmail = process.env.VITE_GOOGLE_CLIENT_EMAIL;
    const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "";
    const privateKey = Buffer.from(privateKeyB64, "base64").toString("utf8");

    const auth = new GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
    });

    const client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    const accessToken = tokenResponse.token;

    if (!accessToken) return res.status(500).json({ error: "No access token" });

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
      const params = new URLSearchParams({
        timeMin: timeMin.toISOString(),
        timeMax: timeMax.toISOString(),
        singleEvents: "true",
        orderBy: "startTime",
      });
      if (calId === "ironlionstrong@gmail.com") params.append("q", "Iron Lion Movement Screen");

      const eventsRes = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calId)}/events?${params}`,
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const eventsData = await eventsRes.json();

      for (const event of eventsData.items || []) {
        if (!event.start?.dateTime) continue;
        const dt = new Date(event.start.dateTime);
        const dateStr = dt.toISOString().split("T")[0];
        const hour = dt.getHours();
        const isHalfHour = dt.getMinutes() === 30;
        const member = (event.summary || "").split(" - ")[0].trim();
        if (!member) continue;

        if (!assessments[dateStr]) assessments[dateStr] = [];
        const existing = assessments[dateStr].find(a => a.hour === hour);
        if (existing) {
          if (!existing.members) { existing.members = [existing.member, null]; delete existing.member; }
          if (isHalfHour) existing.members[1] = member;
          else existing.members[0] = member;
        } else {
          assessments[dateStr].push(isHalfHour ? { hour, members: [null, member] } : { hour, member });
        }
      }
    }

    res.status(200).json(assessments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
