const {Cadastro : CadastroModel} = require("../models/Cadastro");

const CadastroController = {
    create: async(req, res) => {
        try{
            const cadastro = {
                nome: req.body.nome,
                senha: req.body.senha
            };

            const response = await CadastroModel.create(cadastro);

            res.status(201).json({response, msg: "Cadastro Criado Com Sucesso!"});
        }
        catch(Error) {
            console.log(Error);
        }
    },
    getall: async(req, res) => {
        try {

            const cadastro = await CadastroModel.find();

            res.json(cadastro);
        }
        catch(Error) {
            console.log(Error);
        }
    },
    get: async(req, res) => {
        try {
            
            const id = req.params.id;

            const cadastro = await CadastroModel.findById(id);

            if(!cadastro) {
                res.status(404).json({msg: "Cadastro Não Encontrado"});
                return;
            }

            res.json(cadastro);


        } catch (error) {
            console.log(error);
        }
    },
    delete: async(req, res) => {
        try {
            
            const id = req.params.id;

            const cadastro = await CadastroModel.findById(id);

            if(!cadastro) {
                res.status(404).json({msg: "Cadastro Não Encontrado"});
                return;
            }

            const deletedCadastro = await CadastroModel.findByIdAndDelete(id);

            res.status(200).json({deletedCadastro, msg:"Cadastro Deletado Com Sucesso!"});

        } catch (error) {
            console.log(error);

        }
    },
    update: async(req, res) => {

        const id = req.params.id;

        const cadastro = {
            nome: req.body.nome,
            senha: req.body.senha
        };

        const updatedCadastro = await CadastroModel.findByIdAndUpdate(id, cadastro);

        if(!updatedCadastro) {
            res.status(404).json({msg: "Cadastro Não Encontrado"});
            return;
        }

        res.status(200).json({cadastro, msg:"Cadastro Atualizado Com Sucesso!"});
    }
};

module.exports = CadastroController;