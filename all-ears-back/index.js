const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()

const sequelize = require("./services/sequelize")
const podcastsRoute = require("./controllers/podcasts")
const AuthRoute = require("./controllers/auth")
const UserRoute = require("./controllers/user")
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(AuthRoute)
app.use(podcastsRoute)
app.use(UserRoute)

app.listen(8000, () => {
    console.log("Express server on, port", process.env.EXPRESS_PORT)
})