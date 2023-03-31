const express = require("express");
const { config } = require("dotenv");
const login = require("./src/routes/auth.route");
const dashboard = require("./src/routes/dashboard.route");
const cors = require("cors");
const app = express();

config();

const corsOptions = {
  origin: "http://localhost:5000",
  allowHeaders: ["accessToken"]
};

const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("Raiz del servidor");
});

app.use(login);
app.use(dashboard);

app.listen(port, () => {
  console.log("Escuchando en el puerto", port);
});
