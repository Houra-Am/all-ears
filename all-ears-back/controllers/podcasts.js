const express = require("express");
const unirest = require("unirest")
const router = express.Router();

async function listenNotesApi(url) {
    const response = await unirest.get(url)
        .header('X-ListenAPI-Key', process.env.LN_KEY)
    return response.toJSON()
}

// Avoir les meilleurs podcasts d'un genre avec l'ID du genre avec la page /podcasts/best/:id?page=1
router.get("/podcasts/best/:id", async (req, res) => {
    try {
        if (Object.keys(req.query).length === 0) { // Si aucune page renseigné alors affiche la première page (0)
            const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${req.params.id}&page=0&region=us&safe_mode=0`)
            res.status(200).json(response)
            return;
        } else if (req.query.page) { // Si non si le query params page est renseigné alors j'affiche sa page correspondante
            console.log(req.query.page)
            const response = await listenNotesApi(`https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=${req.params.id}&page=${req.query.page}&region=us&safe_mode=0`)
            res.status(200).json(response)
        }
    } catch (err) {
        console.log(err)
        res.status(404).json({
            status: 404,
            message: "Podcasts not found"
        })
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