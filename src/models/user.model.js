/**
 * Modelo de la tabla usuario para sequelize
 */
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "usuario",
    {
      id_usuario: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.STRING,
      },
      login: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      id_rol: {
        type: Sequelize.BIGINT,
      },
      email: {
        type: Sequelize.STRING,
      },
      id_estacion: {
        type: Sequelize.BIGINT,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return User;
};
