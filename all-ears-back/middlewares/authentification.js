const jwt = require("jsonwebtoken")
const User = require("../models/users")

async function userConnected(req, res, next) {
    try {
        const token = req.headers.authorization
        const result = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
        const user = await User.findOne({
            where: { id: result.id }
        })
        if (result) {
            req.user = user;
            next()
        }
    } catch (err) {
        res.status(403).json({
            status: 403,
            message: err,
        })
    }
}

module.exports = userConnected;