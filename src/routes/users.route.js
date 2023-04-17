const { Router } = require("express");
const users = require("../controllers/users.controller");
//Middleware para validar campos
const { validateFields } = require("../middleware/handleErrors");

const router = Router();

/** Rutas para el CRUD de usuarios */
router.get("/api/users", users.getUsers);
router.get("/api/users/:id", users.getUser);
router.post("/api/users", validateFields, users.createUser);
router.put("/api/users/:id", validateFields, users.updateUser);
router.delete("/api/users/:id", users.delUser);

module.exports = router;
