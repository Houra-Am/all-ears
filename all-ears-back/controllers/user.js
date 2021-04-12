const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const sequelize = require("../services/sequelize")

router.get("/user/:id/likes", async (req, res) => {
    try {
        const [results, metadata] = await sequelize.query(
            `SELECT users.id, users.username, podcasts_likes.podcast_id FROM users INNER JOIN podcasts_likes on users.id = podcasts_likes.fk_user_id WHERE users.id = ${req.params.id}`
        )
        if (results.length === 0) {
            res.status(404).json({
                status: 404,
                message: "Aucun podcast like"
            })
            return;
        }
        res.status(200).json(results)
    } catch (err) {
        res.status(404).json({
            status: 404
        })
    }
})

module.exports = router;