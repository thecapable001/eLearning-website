const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "bytebridge_secret_key";

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization || "";

  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Token invalid or expired" });
  }
}

module.exports = verifyToken;
