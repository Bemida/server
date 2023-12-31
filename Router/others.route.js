const express = require ('express')
const router = express.Router()

const emailServices = require ('../BL/email.services')

// creator: yosef sch 


//need email address, subject=title of the email, html=component with all data end css
router.post("/sendemail", async(req,res)=>{
    const fakeData = req.body
    // const fakeData={email:"yosef74526@gmail.com",title:"yooo",html:'<h1>goooo <h2>nnnnnn</h2></h1>'}
    try{
        if(!fakeData.title) throw "title is required"
        if(!fakeData.html && !fakeData.text) throw "html or text is required"
        if(!fakeData.email) throw "email is required"
        else{await emailServices.sendOrderEmail({email:fakeData.email,title:fakeData.title,html:fakeData?.html,text:fakeData?.text})
    res.send("email send to -"+fakeData.email)}}
    catch(err){ res.send(err)}
})

module.exports = router
