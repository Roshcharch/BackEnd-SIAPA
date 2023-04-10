const { Sequelize } = require("sequelize");
const db = require("../config/db.config");

console.log(db.HOST)
console.log(db.USER)
console.log(db.PASSWORD)
console.log(db.DATABASE)
console.log(db.DIALECT)


const sequelize = new Sequelize(db.DATABASE, db.DBUSER, db.PASSWORD, {
  host: db.HOST,
  dialect: db.DIALECT,
  define:{
    timestamps: false
  },
});

module.exports = {sequelize,
Sequelize};