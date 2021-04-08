const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const router = express.Router();
const expressValidator = require('express-validator');
const User = require("../models/users.js");

router.post("/signup",
    expressValidator.body("email").isEmail(),
    expressValidator.body('password').isLength({ min: 8 }),
    expressValidator.body('username').isLength({ min: 2 }),
    async (req, res) => {
        try {
            const errors = expressValidator.validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const userExist = await User.findOne({
                where: { email: req.body.email }
            })
            if (!userExist) {
                await User.create({
                    email: req.body.email,
                    username: req.body.username,
                    password: bcrypt.hashSync(req.body.password)
                });
                res.status(200).json({
                    status: 200,
                    success: "User created"
                })
            } else {
                res.status(400).json({
                    status: 400,
                    error: "Email already use"
                })
                return;
            }
        } catch (err) {
            console.log(err)
        }
    })

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            where: { email: req.body.email }
        });
        if (user) {
            if (req.body.email && req.body.password) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const token = jwt.sign({
                        id: user.id,
                        email: user.email
                    }, process.env.JWT_SECRET, {
                        expiresIn: parseInt(process.env.JWT_EXPIRE)
                    })
                    res.status(200).json({
                        status: 200,
                        message: "Connected",
                        token: token
                    })
                    return;
                } else {
                    res.status(401).json({
                        error: "Email or password incorrect"
                    })
                    return;
                }
            } else {
                res.status(400).send("il manque le mot de passe ou email")
            }
        } else {
            res.status(404).json({
                error: "Email not exist"
            })
            return;
        }
    } catch (err) {
        res.status(500).send()
    }
})

router.get("/connected", async (req, res) => {
    try {
        const token = req.headers.authorization
        const result = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
        if (result) {
            res.status(200).json({
                status: 200,
                message: "Connected"
            })
        }
    } catch (err) {
        res.status(403).json({
            status: 403,
            message: err,
        })
    }
})

module.exports = router;