const { Router } = require("express");
const account = require("../controllers/verify.controller");
const auth = require("../middleware/authJWT")

const router = Router();

router.get("/api/verify",[auth.verifyToken], account.isVerified);

module.exports = router;