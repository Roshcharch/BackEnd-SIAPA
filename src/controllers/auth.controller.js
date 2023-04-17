const seq = require("../models/db");
const account = require("../models/user.model")(seq.sequelize, seq.Sequelize);
const jwt = require("jsonwebtoken"); //Modulo para generacion de JWT

const { config } = require("dotenv"); //Modulo para el uso de variables de entorno
config(); //habilita el uso de variales de entorno

exports.login = async (req, res, next) => {
  const { user, pass } = req.body;
  /** Generacion de prepared statement
   * por medio de Sequelize
   */
  await account
    .findOne({ where: { login: user } }) //Para busquedea de un solo valor
    /** Try Catch para funciones Sequelize */
    .then((result) => {
      /** Condicinal para verificar si el password coincide */
      if (!result) {
        return res.status(404).send({
          message: "Usuario no encontrado!!!",
        });
      }
      /** Condicinal para verificar si el password coincide */
      if (pass !== result.password) {
        return res.status(401).send({
          message: "Contraseña incorrecta!!!",
        });
      }
      /** Generacion de token de sesion retornando id_rol
       *  firmado por clave secreta y cifrado con HS256
       */
      var token = jwt.sign({ role: result.rolId }, process.env.TK_SECRET, {
        expiresIn: 900, //Duracion de token de 15 minutos
        algorithm: ["HS256"], //Algoritmo de cifrado, evita tambien que se cambie
      });
      /** Respuesta con mensaje y l token generado */
      res.status(200).send({
        message: "Usuario y contraseña correctos",
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
