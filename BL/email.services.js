const nodemailer= require('nodemailer')

// creator -yosefsch
let trensporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"yosef74526@gmail.com",
        pass:process.env.EMAIL_PASS
    }
})
// const mailOptions={
//     from:"yosef74526@gmail.com",
//     to:"yosef74526@gmail.com",
//     subject:"try to send",
//     text:"try to send email to yosef74526@gmail.com"
// }
//need email address, subject=title of the email, html=component with all data end css
async function sendOrderEmail(email,subject,html){
    const mailOptions={
        from:"yosef74526@gmail.com",
        to:email,
        subject:subject,
        html:html
    }
     trensporter.sendMail(mailOptions,(err,info)=>{
            if(err){console.log(err)}
            else{res.send("email send"+info.response)}
            console.log("goog 2")
        })
}

module.exports = {sendOrderEmail}

// const fakeData={size:{height:50,width:30},email:"yosef74526@gmail.com",html:'<h1>goooo <h2>nnnnnn</h2></h1>'}
// router.get ("/mail1", async (req,res)=>{
//    try{ const email = await emailServices.sendOrderEmail(fakeData)
//     res.send("email send to -"+fakeData.email)}
//     catch(err){ console.log(err)}
// })
