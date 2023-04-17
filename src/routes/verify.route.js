const { Router } = require("express");
const account = require("../controllers/verify.controller");
const auth = require("../middleware/authJWT");

/**Habilita el uso de rutas */
const router = Router();

/** Ruta para verificacion persistente de sesion */
router.get("/api/verify", [auth.verifyToken], account.isVerified);

module.exports = router;
