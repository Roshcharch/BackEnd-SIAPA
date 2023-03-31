const { Router } = require("express");
const auth = require("../controllers/auth.controller");

const router = Router();

router.post("/api/auth", auth.login);

module.exports = router;
