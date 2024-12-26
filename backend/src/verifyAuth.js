const { verifyToken } = require("./encrypt");

function authenticateToken(req, res, next) {
  const token =
    req.headers["authorization"]?.split(" ")[1] || req.cookies.authToken;
  console.log("Token "+token);

  if (!token) {
    return res.status(403).send("Access denied. No token provided.");
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    console.log("Decoded data"+decoded);
    console.log("User verified");

    next();
  } catch (err) {
    return res.status(401).send("Invalid user entry.");
  }
}

module.exports = authenticateToken;
