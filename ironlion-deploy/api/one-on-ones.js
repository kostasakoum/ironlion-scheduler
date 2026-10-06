const crypto = require("crypto");

const COACH_NAMES = ["Chris C", "Chris E", "Kostas", "Andrew", "Hayley", "Nick", "Elijah", "Troy", "Ricky"];

function parseOneOnOne(summary) {
  if (!summary) return null;
  // Must contain some form of "1 on 1", "1-on-1", or "one on one"
  if (!/1[\s-]on[\s-]1|one on one/i.test(summary)) return null;

  // Member is everything before the first " - "
  const dashIdx = summary.indexOf(" - ");
  if (dashIdx === -1) return null;
  const member = summary.substring(0, dashIdx).trim();
  if (!member) return null;

  const rest = summary.substring(dashIdx + 3).trim();

  let coach = null;

  // Pattern 1: "w/ CoachName" anywhere in rest
  const wWithMatch = rest.match(/w\/\s*([A-Za-z\s]+?)(?:\s*$)/i);
  if (wWithMatch) {
    coach = wWithMatch[1].trim();
  } else {
    // Pattern 2: "CoachName 1 on 1" — name before the "1 on 1"
    const beforeOneOnOne = rest.replace(/Iron Lion\s*/i, "").replace(/1[\s-]on[\s-]1.*/i, "").trim();
    if (beforeOneOnOne) coach = beforeOneOnOne;
  }

  if (!coach) return null;

  // Match against known coach names (longest match first to catch "Chris C" / "Chris E")
  const coachLower = coach.toLowerCase();
  const matched = COACH_NAMES.find(c => coachLower.includes(c.toLowerCase()));
  if (matched) {
    coach = matched;
  } else {
    // Fall back to first word
    coach = coach.split(/\s+/)[0];
  }

  return { member, coach };
}

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

    const calendarConfigs = [
      { id: "ddd1u1g5ibth6hqtc8l6k5g1oo@group.calendar.google.com", queries: ["1 on 1", "1-on-1"] },
      { id: "ironlionstrong@gmail.com", queries: ["1 on 1", "1-on-1"] },
    ];

    const timeMin = new Date();
    timeMin.setDate(timeMin.getDate() - 30);
    const timeMax = new Date();
    timeMax.setDate(timeMax.getDate() + 60);

    const result = {};
    const seenEventIds = new Set();

    for (const cal of calendarConfigs) {
      for (const q of cal.queries) {
        const params = new URLSearchParams({
          timeMin: timeMin.toISOString(),
          timeMax: timeMax.toISOString(),
          singleEvents: "true",
          orderBy: "startTime",
          q,
        });

        const eventsRes = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(cal.id)}/events?${params}`,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const eventsData = await eventsRes.json();

        for (const event of (eventsData.items || [])) {
          if (!event.start?.dateTime) continue;
          if (event.status === "cancelled") continue;
          if (seenEventIds.has(event.id)) continue;
          seenEventIds.add(event.id);

          const parsed = parseOneOnOne(event.summary || "");
          if (!parsed) continue;

          const dtStr = event.start.dateTime;
          const timePart = dtStr.match(/T(\d{2}):(\d{2}):/);
          if (!timePart) continue;
          const hour = parseInt(timePart[1]);
          const dateStr = dtStr.split("T")[0];

          if (!result[dateStr]) result[dateStr] = [];
          // Avoid duplicates for same hour+coach
          const exists = result[dateStr].find(e => e.hour === hour && e.coach === parsed.coach);
          if (!exists) {
            result[dateStr].push({ hour, member: parsed.member, coach: parsed.coach });
          }
        }
      }
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
