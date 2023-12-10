const express = require("express");
const router = express.Router();

//linea para coroborar las validaciones
const { createPostSoliValidator, idInParamsValidator } = require("../validators/post.Soli.validators");
//impirmir el erro que tiene los validadores
const validateFilds = require("../validators/index.middleware");
//genera los posto luego de las validaciones
const postSoliController = require("../controllers/post.Soli.controller");


//las rutas van a llegar desde /api/post/....
router.get("/", postSoliController.findAllSoli);



router.get("/:identifier",
    idInParamsValidator,                     //valida las condiciones
    validateFilds,                          //retorna el valor del erro de los campos
    postSoliController.finSolieByIdSoli);            //genera el post


router.post(["/","/:identifier"],
    createPostSoliValidator,               //valida las condiciones
    validateFilds,                     //valida y retorna si hay algun erro
    postSoliController.saveSoli);            //publica el post si no hay ningun error

router.delete("/:identifier",
    idInParamsValidator,
    postSoliController.delateByIdSoli);

module.exports = router;