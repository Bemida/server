const express = require ('express')
const router = express.Router()

const itemServices = require ('../Bl/item.service')
const { it } = require('node:test')

//Sample function using GET:


router.get ("/allitems", async (req,res)=>{
    try{
        const item = await itemServices.getAllItems()
        res.send (item)
        
        
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.get ("/barcode/:barcode", async (req,res)=>{
    try{
        const item = await itemServices.getItemByBarcode(req.params.barcode)
        res.send (item)
        
        
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.get ("/type", async (req,res)=>{
    try{
        const item = await itemServices.getItemsByType(req.body.type)
        res.send (item)
        
        
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.post ("/additem", async (req,res)=>{
    try{
        
        const item = await itemServices.addItem(req.body)
        res.send(item)
        
        
    }
    catch (err){
        res.status(400).send(err)
    }
})

router.put ("/:barcode", async (req,res)=>{
    try{
       const item = await itemServices.updateItem(req.params.barcode,req.body)
       res.send (item)

    }
    catch (err){
        res.status(400).send(err)
    }
})


module.exports = router