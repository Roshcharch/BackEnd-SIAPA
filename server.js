const express = require("express");
const { config } = require("dotenv");
const login = require("./src/routes/auth.route");
const verify = require("./src/routes/verify.route");
const cors = require("cors");
const app = express();

config();

const corsOptions = {
  origin: "http://localhost:5000",
  allowHeaders: ["accessToken"]
};

const port = process.env.PORT;

app.use(express.json());
app.use(cors(corsOptions));

// app.get("/", function (req, res) {
//   res.send("Raiz del servidor");
// });

app.use("/",login);
app.use("/",verify);

app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
