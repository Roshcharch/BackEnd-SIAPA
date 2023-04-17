const { Router } = require("express");
const auth = require("../controllers/auth.controller");
//Middleware para validar campos de inicio de sesión
const { validateUser } = require("../middleware/handleErrors");

const router = Router();

router.post("/api/auth", validateUser, auth.login);

module.exports = router;
