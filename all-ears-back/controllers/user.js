const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const sequelize = require("../services/sequelize")
const userConnected = require("../middlewares/authentification")
const unirest = require("unirest")

async function listenNotesApi(url) {
    const response = await unirest.get(url)
        .header('X-ListenAPI-Key', process.env.LN_KEY)
    return response.toJSON()
}

router.get("/user/likes", userConnected, async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT users.id, users.username, podcasts_likes.podcast_id FROM users INNER JOIN podcasts_likes on users.id = podcasts_likes.fk_user_id WHERE users.id = ${req.user.id}`
        )
        if (results.length === 0) {
            res.status(404).json({
                status: 404,
                message: "Aucun podcast like"
            })
            return;
        }
        const podcasts = [];
        for (let i = 0; i < results.length; i++) {
            const podcast = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/podcasts/${results[i].podcast_id}`)
            podcasts.push(podcast)
        }
        res.status(200).json(podcasts)
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 404
        })
    }
})

module.exports = router;