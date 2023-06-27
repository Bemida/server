//This is where we build the routes to accept API requests - POST, GET, PUT, DELETE

const express = require ('express')
const router = express.Router()

const templateServices = require ('../Bl/template.services')

//Sample function using GET:

router.get ("/", async (req,res)=>{
    try{

    }
    catch (err){
        res.status(400).send(err)
    }
})

module.exports = router