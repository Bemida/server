const nodemailer = require('nodemailer')

// creator -yosefsch
// account to email

let transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"bmida20@gmail.com",
        pass:process.env.EMAIL_PASS
    }
})

//need email address, title=title of the email, html=component with all data end css ,text=text or html
async function sendOrderEmail({email,title,html,text}){
    const mailOptions={
<<<<<<< HEAD
        from: "bmida20@gmail.com",
        to: email,
        subject: subject,
        html: html
=======
        from:"yosef74526@gmail.com",
        to:email,
        subject:title,
        html:html,
        text:text
>>>>>>> 23e4d837c31ce6fe3d6f7a3269c57eb7f94fe6fc
    }
    return transporter.sendMail(mailOptions,(err,info)=>{
            if(err){throw err}
            else{res.send("email send to -"+info.response)}
        })
}

module.exports = { sendOrderEmail }

// const fakeData={size:{height:50,width:30},email:"yosef74526@gmail.com",html:'<h1>goooo <h2>nnnnnn</h2></h1>'}
// router.get ("/mail1", async (req,res)=>{
//    try{ const email = await emailServices.sendOrderEmail(fakeData)
//     res.send("email send to -"+fakeData.email)}
//     catch(err){ console.log(err)}
// })
