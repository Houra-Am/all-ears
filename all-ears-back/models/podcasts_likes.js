const { Sequelize } = require('sequelize');
const sequelize = require("../services/sequelize")

const PodcastsLikes = sequelize.define('podcasts_likes', {
    fk_user_id: Sequelize.INTEGER,
    podcast_id: Sequelize.INTEGER
})

module.exports = PodcastsLikes;