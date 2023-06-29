const express = require ('express')
const router = express.Router()
const paymentServices = require("../BL/payment.service")
const { log } = require('console')

router.post("/", async (req, res) => {
    try{
        const order = req.body
        const finalPayment = "ddd"
        console.log(order)
        res.send(finalPayment)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router