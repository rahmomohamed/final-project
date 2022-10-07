const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

exports.generateAuthToken = generateAuthToken;
exports.requireAuthentication = requireAuthentication;

function generateAuthToken(email, userID) {
  return new Promise((resolve, reject) => {
    const payload = { sub: email, id: userID };
    jwt.sign(payload, secretKey, { expiresIn: "7d" }, function (err, token) {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

function requireAuthentication(req, res, next) {
  const authHeader = req.get("Authorization") || "";
  const authHeaderParts = authHeader.split(" ");
  const token = authHeaderParts[0] === "Bearer" ? authHeaderParts[1] : null;
  jwt.verify(token, secretKey, function (err, payload) {
    if (err) {
      res.status(401).json({
        error: "Invalid authentication token",
      });
    } else {
      req.email = payload.sub;
      req.userID = payload.id;
      next();
    }
  });
}
