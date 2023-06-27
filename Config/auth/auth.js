const jwt = require('jsonwebtoken')

async function createToken(data) {
    return jwt.sign(data, process.env.SECRET, { expiresIn: "2m" })
}

async function verify(req, res, next) {
    try {
        const token = req.headers.authorization.split("Bearer ")[1]
        jwt.verify(token, process.env.SECRET)
        next()
    }
    catch (err) {
        res.sendStatus(401)
    }
}
module.exports = { createToken, verify }