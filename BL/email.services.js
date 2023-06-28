const nodemailer = require('nodemailer')

// creator -yosefsch
// account to email
let trensporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bmida20@gmail.com",
        pass: process.env.EMAIL_PASS
    }
})

//need email address, subject=title of the email, html=component with all data end css
async function sendOrderEmail(email, subject, html) {
    const mailOptions = {
        from: "bmida20@gmail.com",
        to: email,
        subject: subject,
        html: html,
        text: text
    }
    return trensporter.sendMail(mailOptions, (err, info) => {
        if (err) { console.log(err) }
        else { res.send("email send" + info.response) }
    })
}

module.exports = { sendOrderEmail }

// const fakeData={size:{height:50,width:30},email:"yosef74526@gmail.com",html:'<h1>goooo <h2>nnnnnn</h2></h1>'}
// router.get ("/mail1", async (req,res)=>{
//    try{ const email = await emailServices.sendOrderEmail(fakeData)
//     res.send("email send to -"+fakeData.email)}
//     catch(err){ console.log(err)}
// })
