const express = require ('express')
const router = express.Router()

const orderServices = require ('../BL/order.services')


router.get ("/", async (req,res)=>{
    try{
        const order = await orderServices.getOrderById(req.body.id)
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