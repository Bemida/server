const jwt = require('jsonwebtoken')

async function createToken(data) {
    return jwt.sign(data, process.env.SECRET, { expiresIn: "2m" })
}

async function verify(req, res, next) {
    try {
        const token = req.headers.authorization.split("Bearer ")[1]
        const email = jwt.verify(token, process.env.SECRET).email
        console.log(token);
        
        next()
    }
    catch (err) {
        res.sendStatus(401)
    }
}
module.exports = { createToken, verify }