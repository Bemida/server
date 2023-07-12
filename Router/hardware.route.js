const express = require("express")
const router = express.Router()
const hardwareServices = require("../BL/hardware.service")

router.post("/", async (req, res) => {
    try{
        const newPricing = await hardwareServices.addHardwarePricing(req.body)
        res.send(newPricing)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router