const express = require ('express')
const router = express.Router()
const paymentServices = require("../BL/payment.service")


router.post("/", async (req, res) => {
    try{
        const orderData = req.body
        const finalPrice = await paymentServices.getFinalPayment(orderData)
        res.send({finalPrice})
    }
    catch(err){
        console.log(err);
        res.send(err)
    }
})

module.exports = router