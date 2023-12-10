const { body } = require("express-validator")

const validator = {};
//const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/

validator.registerValidator = [

    body("username")
        .notEmpty().withMessage("El usuario es requerido")
        .isLength({ min: 4, max: 32 }).withMessage("formato de username incorrecto"),
    body("dui")
        .notEmpty().withMessage("El dui es requerido")
        .isLength({ min: 9, max: 9 }).withMessage("dui incorrecto escribir sin -"),
    body("tel")
        .notEmpty().withMessage("El telefono es requerido")
        .isLength({ min: 8, max: 8}).withMessage("El numero debe de tener 8 digitos"),
    body("password")
        .notEmpty().withMessage("El Password es requerido")
        //.matches(passwordRegexp).withMessage("Formato de password incorecto")



];

module.exports = validator;