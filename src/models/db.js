const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

/**
 * Instancia para conexión con la base de datos
 * por medio de Sequelize usando valores externos
 */

const sequelize = new Sequelize(db.DATABASE, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.DIALECT,
  define: {
    timestamps: false,
  },
});

//Exporta la instancia a la bd y el modulo de Sequelize
module.exports = { sequelize, Sequelize };
