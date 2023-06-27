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

router.get ("/barcode/:barcode", async (req,res)=>{
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
// creator -yosefsch
const nodemailer= require('nodemailer')
let trensporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"yosef74526@gmail.com",
        pass:process.env.EMAIL_PASS
    }
})
const mailOptions={
    from:"yosef74526@gmail.com",
    to:"yosef74526@gmail.com",
    subject:"try to send",
    text:"try to send email to yosef74526@gmail.com"
}
router.get ("/mail1", async (req,res)=>{
    // res.send("good")
    trensporter.sendMail(mailOptions,(err,info)=>{
        if(err){console.log(err)}
        else{res.send("email send"+info.response)}
        // console.log("goog 2")
    })
})






