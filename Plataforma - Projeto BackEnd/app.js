const express = require("express");
const cors = require("cors");
const app = express();


require("dotenv").config();

app.use(cors());

app.use(express.json());

const conn = require("./db/conn");

conn();

const routes = require("./routes/Router");

app.use("/api", routes);

app.listen(process.env.PORT, function() {
    console.log("API Funcionando");
})


//g6eas1F5vXp6nFf9