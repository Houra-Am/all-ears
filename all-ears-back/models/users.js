const { Sequelize } = require('sequelize');
const sequelize = require("../services/sequelize");

const User = sequelize.define('users', {
    email: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    profil_img: Sequelize.STRING
})

module.exports = User;