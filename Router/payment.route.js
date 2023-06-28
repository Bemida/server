const express = require ('express')
const router = express.Router()

router.post("/", (req, res) => {
    try{
        const finalPayment = "ddd"
        res.send(finalPayment)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router