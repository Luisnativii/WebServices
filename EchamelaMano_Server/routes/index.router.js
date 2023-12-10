const express = require("express");
const router = express.Router();

const postDonRouter = require("./post.don.router");
const postSoliRouter = require("./post.Soli.router");
const authRouter = require("../routes/auth.router");

//enrutadores por defecto /api/...

router.use("/postDon", postDonRouter);
router.use("/postSoli", postSoliRouter);

router.use("/auth", authRouter);


module.exports = router;