const { config } = require("dotenv");
config();
/** Se estabecen los valores para la conexion con
 *  la base de datos usando variables de entorno
 */
module.exports = {
  HOST: process.env.HOST,
  USER: process.env.DBUSER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
  DIALECT: process.env.DIALECT,
};
