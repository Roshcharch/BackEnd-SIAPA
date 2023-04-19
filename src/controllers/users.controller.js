const seq = require("../models/db");
const users = require("../models/user.model")(seq.sequelize, seq.Sequelize);

/**
 * CRUD de usuarios
 */
const getUsers = async (req, res) => {
  console.log("getUsers: ");
  const listUsers = await users.findAll();
  res.send({ listUsers });
};

const getUser = async (req, res) => {
  console.log("getUser: ");
  const id = req.params.id;
  await users
    .findOne({ where: { id_usuario: id } })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Usuario no encontrado!!!",
        });
      }
      res.status(200).send({
        result,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const createUser = async (req, res) => {
  console.log("createUser: ");
  const { nombre, login, password, idRol, email, idEstacion } = req.body;
  await users.create({
    id_usuario: "DEFAULT",
    nombre: nombre,
    login: login,
    password: password,
    id_rol: idRol,
    email: email,
    id_estacion: idEstacion,
  });
  res.send({ message: "Usuario creado", status: "created" });
};

const updateUser = async (req, res) => {
  console.log("updateUser: ");
  const id = req.params.id;
  const { nombre, login, password, idRol, email, idEstacion } = req.body;
  await users.update(
    {
      //id_usuario: "DEFAULT",
      nombre: nombre,
      login: login,
      password: password,
      id_rol: idRol,
      email: email,
      id_estacion: idEstacion,
    },
    { where: { id_usuario: id } }
  );
  res.send({ message: "Usuario actualizado", status: "updated" });
};

const delUser = async (req, res) => {
  console.log("deleteUser: ");
  const id = req.params.id;
  await users.destroy({ where: { id_usuario: id } });
  res.send({ message: "Usuario Borrado", status: "deleted" });
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  delUser,
};
