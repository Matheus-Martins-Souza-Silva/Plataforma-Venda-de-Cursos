const express = require("express");
const cors = require("cors");
const app = express();
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;


require("dotenv").config();

authenticationWithOAuth();

async function authenticationWithOAuth() {
    const OAuthClient = await createOAuthClient();

    requestUserConsent(OAuthClient);

    const authorizationToken = await waitForGoogleCallBack();
}

async function waitForGoogleCallBack() {
    return new Promise((resolve, reject) => {
        console.log("Esperando O Usuario Responder");

        app.get('/oauth2callback', (req, res) => {
            const authCode = req.query.code;
            console.log(`O Usuario Aceito: ${authcode}`);

            resolve(authCode);
        })
    })
}

async function createOAuthClient() {
    //const credentials = require('client_secret_746081175919-hvbgi850a6a8oj04obg1ceejber0uleh.apps.googleusercontent.com.json');
    const credentials = require('./client_secret_746081175919-hvbgi850a6a8oj04obg1ceejber0uleh.apps.googleusercontent.com.json');

    const OAuthClient = new OAuth2(
        credentials.web.client_id,
        credentials.web.client_secret,
        credentials.web.redirect_uris[0]
    );

    return OAuthClient;
}

function requestUserConsent(OAuthClient) {
    const consentUrl = OAuthClient.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/youtube"]
    })

    console.log(`WTF IS HAPPENING: ${consentUrl}`);
}

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

