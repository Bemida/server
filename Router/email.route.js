const emailServices = require ('../BL/email.services')

router.post("/mail1", async(req,res)=>{
    const fakeData = req.body
    // const fakeData={email:"yosef74526@gmail.com",title:"yooo",html:'<h1>goooo <h2>nnnnnn</h2></h1>'}
    try{
        if(!fakeData.title) throw "title is required"
        if(!fakeData.html) throw "html is required"
        if(!fakeData.email) throw "email is required"
        else{await emailServices.sendOrderEmail(fakeData.email,fakeData.title,fakeData.html)
    res.send("email send to -"+fakeData.email)}}
    catch(err){ res.send(err)}
})

module.exports = router
