const { Router } = require("express");
const dashboard = require("../controllers/dashboard.controller");
const auth = require("../middleware/authJWT")

const router = Router();

router.get("/api/dashboard/operator",[auth.verifyToken,auth.isOperator], dashboard.operator);
router.get("/api/dashboard/visor",[auth.verifyToken,auth.isVisor], dashboard.visor);
router.get("/api/dashboard/admin",[auth.verifyToken,auth.isAdmin], dashboard.admin);


module.exports = router;