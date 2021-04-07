const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()

const sequelize = require("./services/sequelize")
const podcastsRoute = require("./controllers/podcasts")
const app = express();

sequelize() // Connexion bdd mysql

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(podcastsRoute)

app.listen(8000, () => {
    console.log("Express server on, port", process.env.EXPRESS_PORT)
})