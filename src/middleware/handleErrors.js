const { check, validationResult } = require("express-validator");

/**
 * Middleware para validacion de campos/datos de
 * inicio de sesión recibidos por medio del
 * modulo express-validator
 */

exports.validateUser = [
  check("user")
    .notEmpty() //Valida si no es un campo vacio
    .trim() //Para eliminar espacios en blanco
    .matches(/^[^\b\f\n\r\v\\'"]*$/) //Verifica si no contiene alguna secuencia de escape
    .withMessage("Not allowed especial characters")
    .escape() //Transforma caracteres de escape HTML para evitar inyeccion sql
    .withMessage("Not allowed html code")
    .customSanitizer(), //Elimina los caracteres generados por escape()
  check("pass")
    .notEmpty()
    .trim()
    .matches(/^[^\b\f\n\r\v]*$/)
    .escape()
    .withMessage("Not allowed escape sequences"),
  (req, res, next) => {
    //Almacenamiento de los errores posibles generados
    const errors = validationResult(req);
    //condicional para validar si existen errores
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

/**
 * Middleware para validacion de campos/datos de
 * CRUD recibidos por medio del
 * modulo express-validator
 */
exports.validateFields = [
  check("user")
    .notEmpty()
    .trim()
    .matches(/^[^\b\f\n\r\v\\'"]*$/)
    .withMessage("Not allowed especial characters")
    .escape()
    .withMessage("Not allowed html code")
    .customSanitizer(),
  check("pass")
    .notEmpty()
    .trim()
    .matches(/^[^\b\f\n\r\v]*$/)
    .escape()
    .withMessage("Not allowed escape sequences"),
  check("email").notEmpty().isEmail(),
  check("name").notEmpty(),
  (req, res, next) => {
    //Almacenamiento de los errores posibles generados
    const errors = validationResult(req);
    //condicional para validar si existen errores
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];
