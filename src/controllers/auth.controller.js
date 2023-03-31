const seq = require("../models/db");
const account = require("../models/user.model")(seq.sequelize, seq.Sequelize);
const jwt = require("jsonwebtoken");
const {config} = require("dotenv")
config()

exports.login = async (req, res, next) => {
  const { user, pass } = req.body;
  console.log("usuario: ",user)
  console.log("pass: ",pass)
  await account
    .findOne({ where: { name: user } })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Usuario no encontrado!!!",
        });
      }

      if (pass !== result.pass) {
        return res.status(401).send({
          message: "Contraseña incorrecta!!!",
        });
      }
      var token = jwt.sign(
        { name: result.name, role: "operator" },
        process.env.TK_SECRET,
        {
          expiresIn: 60,
        }
      );
      res.status(200).send({
        message: "Usuario y contraseña correctos",
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
