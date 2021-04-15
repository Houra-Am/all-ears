const express = require("express");
const unirest = require("unirest")
const router = express.Router();
const PodcastsLikes = require("../models/podcasts_likes")
const userConnected = require("../middlewares/authentification")

async function listenNotesApi(url) {
    const response = await unirest.get(url)
        .header('X-ListenAPI-Key', process.env.LN_KEY)
    return response.toJSON()
}

router.post("/podcasts/like/:id", userConnected, async (req, res) => {
    try {
        await PodcastsLikes.create({
            fk_user_id: req.user.id,
            podcast_id: req.params.id
        })
        res.status(200).json({
            status: 200,
            message: "Podcast success liked!"
        })
    } catch (err) {
        res.status(403).json({
            status: 403,
            message: err,
        })
    }
})


// Avoir les meilleurs podcasts d'un genre avec l'ID du genre avec la page /podcasts/best/:id?page=1
router.get("/podcasts/best/:id", async (req, res) => {
    try {
        if (Object.keys(req.query).length === 0) { // Si aucune page renseigné alors affiche la première page (0)
            const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${req.params.id}&page=0&region=us&safe_mode=0`)
            res.status(200).json(response)
            return;
        } else if (req.query.page) { // Si non si le query params page est renseigné alors j'affiche sa page correspondante
            const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${req.params.id}&page=${req.query.page}&region=us&safe_mode=0`)
            res.status(200).json(response)
            return;
        } else if (req.query.number) { // Si non si le query params number est renseigné alors j'affiche le number de podcasts
            let podcasts = [];
            const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${req.params.id}&page=0&region=us&safe_mode=0`)
            for (let i = 0; i < parseInt(req.query.number); i++) {
                podcasts.push(response.body.podcasts[i])
            }
            res.status(200).json(podcasts)
            return;
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 404,
            message: "Podcasts not found"
        })
    }
})


// Rechercher des podcasts => /podcasts/search/TEXT/PAGE (prend en compte les espace)
router.get("/podcasts/search/:string/:page", async (req, res) => {
    try {
        let page = req.params.page * 10;
        const regex = /\s/g;
        let string = req.params.string.replace(regex, "%20");
        const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/search?q=${string}&sort_by_date=0&type=podcast&offset=${page}&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
        if (response.body.count === 0) {
            res.status(404).json({
                status: 404,
                message: "Podcast not found"
            })
            return
        } else {
            res.status(200).json(response)
            return;
        }
    } catch (err) {
        console.log(err)
    }
})

// Avoir 1 podcasts aleatoire
router.get("/podcasts/random", async (req, res) => {
    try {
        const response = await listenNotesApi("https://listen-api.listennotes.com/api/v2/just_listen")
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
    }
})

// Avoir tous les genres de podcasts => /podcasts/genres - Avoir les best genres de podcasts => /podcasts/genres?best=true
// Si best = autre valeur que TRUE il enverra tous les genres.
router.get("/podcasts/genres", async (req, res) => {
    try {
        if (Object.keys(req.query).length === 0) {
            const response = await listenNotesApi("https://listen-api.listennotes.com/api/v2/genres?top_level_only=0")
            res.status(200).json(response)
            return;
        } else if (req.query.best) {
            if (req.query.best === "true") {
                const response = await listenNotesApi("https://listen-api.listennotes.com/api/v2/genres?top_level_only=1")
                res.status(200).json(response)
                return;
            } else {
                const response = await listenNotesApi("https://listen-api.listennotes.com/api/v2/genres?top_level_only=0")
                res.status(200).json(response)
                return;
            }
        } else {
            res.status(404)
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 404,
            message: "Genre not found"
        })
    }
})

// Avoir toutes les informations d'un podcasts via son ID => /podcasts/:id
router.get("/podcasts/:id", async (req, res) => {
    try {
        const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/podcasts/${req.params.id}`)
        res.status(200).json(response)
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 404,
            message: "Podcasts not found"
        })
    }
})

module.exports = router