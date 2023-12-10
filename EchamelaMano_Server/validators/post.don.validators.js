const { body, param } = require("express-validator");
const validatorsDon = {};

validatorsDon.createPostDonValidator = [


    param("identifire")
        .optional()
        .isMongoId().withMessage("Identificador debe de ser mongo ID"),

    //utilizando libreria express validator

    body("title_don")
        //validar que no esta vacia si no enviar el mensaje que es requerido
        .notEmpty().withMessage("title es requerido"),

    body("Nombre_Don")
        .notEmpty().withMessage("Nombre es requerido"),
        //longitud maxima de la descripcion

    body("Email_Don")
        .notEmpty().withMessage("Email es requerido")
        //longitud maxima de la descripcion
        .isEmail().withMessage("No es un correo electronico"),


        body("telefono_don")
        .notEmpty().withMessage("telefono es requerido"),
        //longitud maxima de la descripcion
        
        
        body("description_don")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion
       
        
        body("Tipo_don")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion
        
        
        body("Cantidad_don")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion
        
        
        body("adicional_don")
            .notEmpty().withMessage("image is adicional_don"),
            //validacion que la imagen sea una URL
        
        

];

validatorsDon.idInParamsValidator = [

    param("identifier")
        .notEmpty().withMessage("Identifire es requerido")
        .isMongoId().withMessage("Identificador debe de ser mongo ID")
]

module.exports = validatorsDon;