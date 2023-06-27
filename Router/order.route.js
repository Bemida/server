const express = require ('express')
const router = express.Router()

const orderServices = require ('../BL/order.services')
const emailServices = require ('../BL/email.services')


router.get ("/:id", async (req,res)=>{
    try{
        const order = await orderServices.getOrder(req.params.id)
        res.send(order)
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.post('/addorder',async (req,res)=>{
    try{
        const order = await orderServices.addOrder(req.body)
        res.status(200).send(order)
    }
    catch(err){
        res.status(999).send(err)
    }
})

module.exports = router