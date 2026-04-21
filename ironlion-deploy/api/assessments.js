const crypto = require("crypto");

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const privateKeyB64 = process.env.VITE_GOOGLE_PRIVATE_KEY || "";
  const privateKey = Buffer.from(privateKeyB64, "base64").toString("utf8");

  // Debug: show key info without exposing the key
  const keyInfo = {
    nodeVersion: process.version,
    b64Length: privateKeyB64.length,
    decodedLength: privateKey.length,
    hasHeader: privateKey.includes("-----BEGIN PRIVATE KEY-----"),
    hasFooter: privateKey.includes("-----END PRIVATE KEY-----"),
    firstLine: privateKey.split("\n")[0],
    lastLine: privateKey.split("\n").filter(l => l.trim()).pop(),
    newlineCount: (privateKey.match(/\n/g) || []).length,
    hasLiteralBackslashN: privateKey.includes("\\n"),
  };

  // Try to create a key object
  try {
    const keyObj = crypto.createPrivateKey({
      key: privateKey,
      format: "pem",
    });
    keyInfo.keyObjectType = keyObj.type;
    keyInfo.keyObjectAsymmetricType = keyObj.asymmetricKeyType;
  } catch (e) {
    keyInfo.keyObjectError = e.message;
  }

  res.status(200).json(keyInfo);
};
