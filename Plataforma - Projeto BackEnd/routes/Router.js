const router = require("express").Router();

const CadastrosService = require("./Cadastros");

router.use("/", CadastrosService);

module.exports = router;
