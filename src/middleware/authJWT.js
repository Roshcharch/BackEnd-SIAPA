const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();

const verifyToken = (req, res, next) => {
  var token = req.headers["x-access-token"];
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

const isOperator = (req, res, next) => {
  if (req.role === "operator") {
    next();
    return;
  }
  res.status(403).send({
    message: "Solo operadores!!!",
  });
};

const isVisor = (req, res, next) => {
  if (req.role === "visor") {
    next();
    return;
  }
  res.status(403).send({
    message: "Solo visores!!!",
  });
};

const isAdmin = (req, res, next) => {
  if (req.role === "admin") {
    next();
    return;
  }
  res.status(403).send({
    message: "Solo administradores!!!",
  });
};
module.exports = {
  verifyToken,
  isOperator,
  isVisor,
  isAdmin,
};
