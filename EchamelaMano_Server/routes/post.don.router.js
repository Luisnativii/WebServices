const express = require("express");
const router = express.Router();

//linea para coroborar las validaciones
const { createPostDonValidator, idInParamsValidator } = require("../validators/post.don.validators");
//impirmir el erro que tiene los validadores
const validateFilds = require("../validators/index.middleware");


//genera los posto luego de las validaciones
const postDonController = require("../controllers/post.don.controller");


//las rutas van a llegar desde /api/post/....
router.get("/", postDonController.findAllDon);



router.get("/:identifier",
    idInParamsValidator,                     //valida las condiciones
    validateFilds,                          //retorna el valor del erro de los campos
    postDonController.findOneByIdDon);            //genera el post


router.post(["/","/:identifier"],
    createPostDonValidator,               //valida las condiciones
    validateFilds,                     //valida y retorna si hay algun erro
    postDonController.saveDon);            //publica el post si no hay ningun error

router.delete("/:identifier",
    idInParamsValidator,
    postDonController.delateByIdDon);

module.exports = router;