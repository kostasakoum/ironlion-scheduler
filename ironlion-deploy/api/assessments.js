export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "";
  const decoded = Buffer.from(privateKeyB64, "base64").toString("utf8");
  
  res.status(200).json({
    b64Length: privateKeyB64.length,
    decodedFirst50: decoded.substring(0, 50),
    decodedLast50: decoded.substring(decoded.length - 50),
    hasPemHeader: decoded.includes("BEGIN PRIVATE KEY"),
    hasNewlines: decoded.includes("\n"),
    newlineCount: (decoded.match(/\n/g) || []).length,
  });
}
