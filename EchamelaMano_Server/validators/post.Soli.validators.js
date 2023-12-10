const { body, param } = require("express-validator");
const validatorsSoli = {};

validatorsSoli.createPostSoliValidator = [


    param("identifire")
        .optional()
        .isMongoId().withMessage("Identificador debe de ser mongo ID"),

    //utilizando libreria express validator

    body("title_Soli")
        //validar que no esta vacia si no enviar el mensaje que es requerido
        .notEmpty().withMessage("title es requerido"),

    body("Email_Soli")
        .notEmpty().withMessage("Email es requerido"),
        //longitud maxima de la descripcion
        
        body("telefono_Soli")
        .notEmpty().withMessage("telefono es requerido"),
        //longitud maxima de la descripcion
    
        body("direccion_Soli")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion

        
        body("motivo_Soli")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion
        
        body("informacion_Soli")
        .notEmpty().withMessage("description es requerido"),
        //longitud maxima de la descripcion
        
        body("terminos_Soli")
            .notEmpty().withMessage("termino es requerido"),
        
        
        
    ];
    
    validatorsSoli.idInParamsValidator = [

    param("identifier")
        .notEmpty().withMessage("Identifire es requerido")
        .isMongoId().withMessage("Identificador debe de ser mongo ID")
]

module.exports = validatorsSoli;