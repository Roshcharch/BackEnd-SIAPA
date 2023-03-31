const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

const sequelize = new Sequelize(db.DATABASE, db.USER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.dialect,
  define:{
    timestamps: false
  },
});

module.exports = {sequelize,
Sequelize};