const router = require("express").Router();

const CadastroController = require("../controllers/CadastroController");
const { Cadastro } = require("../models/Cadastro");

router.route("/cadastro").post((req, res) => CadastroController.create(req, res));

router.route("/cadastro").get((req, res) => CadastroController.getall(req, res));

router.route("/cadastro/:id").get((req, res) => CadastroController.get(req, res));

router.route("/cadastro/:id").delete((req, res) => CadastroController.delete(req, res));

router.route("/cadastro/:id").put((req, res) => CadastroController.update(req, res));

module.exports = router;