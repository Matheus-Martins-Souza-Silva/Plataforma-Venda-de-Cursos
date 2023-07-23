const mongoose = require("mongoose");

const {Schema} = mongoose;

const CadastroSchema = new Schema({
    nome:{
        type: String,
        required: true,
    },
    senha:{
        type: String,
        required: true,
    },
}, {timestamps: true});

const Cadastro = mongoose.model("Cadastro", CadastroSchema);

module.exports = {
    Cadastro,
    CadastroSchema,
};