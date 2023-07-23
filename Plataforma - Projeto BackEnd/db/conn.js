const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {

    try{

        //Necessario adicionar o DNS 8.8.8.8 e 8.8.0.0
        
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.q3fshb0.mongodb.net/?retryWrites=true&w=majority`);

        console.log("Conectado ao Banco de Dados");
    }
    catch(error) {
        console.log(`Error = ${error}`);
    }
}

module.exports = main;