const express = require("express");
const { config } = require("dotenv");
const login = require("./src/routes/auth.route");
const verify = require("./src/routes/verify.route");
const users = require("./src/routes/users.route");
const cors = require("cors"); //Habilita la comunicacion entre servidores
const app = express();

//Habilita el uso de variables de entorno
config();

/**
 * Establece el origen de los headers
 * a recibir y establece el nombre del header
 * a recibir
 */
const corsOptions = {
  origin: "http://localhost:5000",
  allowHeaders: ["accessToken"],
};

/**
 * Establece el puerto de escucha
 * desde variables de entorno, si
 * no encuentra usa la declarada
 */
const port = process.env.PORT | 3001;

app.disable("x-powered-by"); //Deshabilita la cabecera para evitar ataques dirigidos
app.use(express.json()); //Habilita la traduccion de JSON
app.use(cors(corsOptions)); //Habilita el uso de Cors

/**
 * Rutas del servidor a usar
 * login: para verificar credenciales al iniciar sesión
 * verify: verifica si la sesion activa es valida
 * users: CRUD de usuarios
 */
app.use("/", login);
app.use("/", verify);
app.use("/", users);

/** Activa el servidor en el puerto establecido */
app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
