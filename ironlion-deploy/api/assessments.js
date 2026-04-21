module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "not set";
  res.status(200).json({ 
    message: "hello",
    nodeVersion: process.version,
    keyB64Start: privateKeyB64.substring(0, 20),
    keyB64Length: privateKeyB64.length
  });
};
