const jwt = require("jsonwebtoken");
const { config } = require("dotenv");
config();

/**
 * Middleware para verificar si el token que se
 * recibe es valido
 */

const verifyToken = (req, res, next) => {
  //Verifica si existe un token en el header
  var token = req.headers["accessToken"];
  if (!token) {
    return res.status(403).send({
      message: "Sin token proporcionado!",
    });
  }
  /**
   * Decodifica el token usando la clave secreta,
   * si es diferente se envia mensaje de error
   * en caso contrario se retorna el valor contenido
   * en el token
   */
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
