const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();

const verifyToken = (req, res, next) => {
  var token = req.headers["accessToken"];
  if (!token) {
    return res.status(403).send({
      message: "Sin token proporcionado!",
    });
  }
  jwt.verify(token, process.env.TK_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Token Invalido o caducado!!!" });
    }
    req.role = decoded.role;
    next();
  });
};

module.exports = {
  verifyToken,
};
