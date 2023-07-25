const express = require("express");
const cors = require("cors");
const app = express();


require("dotenv").config();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

const conn = require("./db/conn");

conn();

const routes = require("./routes/Router");

app.use("/api", routes);

app.listen(process.env.PORT, function() {
    console.log("API Funcionando");
})