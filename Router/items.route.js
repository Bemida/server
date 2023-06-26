const express = require ('express')
const router = express.Router()

const itemServices = require ('../Bl/item.service')

//Sample function using GET:

// router.get ("/:id", async (req,res)=>{
//     try{
//        const item = await itemServices.getItem(req.params.id)
//        res.send (item)


//     }
//     catch (err){
//         res.status(400).send(err)
//     }
// })

router.get ("/allitems", async (req,res)=>{
    try{
       const item = await itemServices.getAllItems()
       res.send (item)


    }
    catch (err){
        res.status(400).send(err)
    }
})

router.get ("/:barcode", async (req,res)=>{
    try{
       const item = await itemServices.getItemByBarcode(req.params.barcode)
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



module.exports = router