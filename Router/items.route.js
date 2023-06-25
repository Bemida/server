const express = require ('express')
const router = express.Router()

const itemServices = require ('../Bl/item.service')

//Sample function using GET:

router.get ("/", async (req,res)=>{
    try{

    }
    catch (err){
        res.status(400).send(err)
    }
})

module.exports = router