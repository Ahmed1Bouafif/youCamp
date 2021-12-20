var express = require("express");
var router = express.Router()
const nodemailer = require("nodemailer")

const smtpTransport  = nodemailer.createTransport({
    service : "gmail",
    auth:{
        user: "bob479402@gmail.com",
        pass:"bobbobbob"
    }
})

router.post('/api/send', function (req, res) {
    var mailOptions = {
        from:"bob479402@gmail.com",
        to: req.body.to,
        subject:"youCamp",
        text: "welcome to our family ❤ , let your Camp journey begin  🏕 ",
        
    }


    
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
            res.json({error: "API Error"});
        } else {
            console.log("Message sent: " + response.to);
            res.json({ response: "sent" });
        }
    });

})
module.exports = router