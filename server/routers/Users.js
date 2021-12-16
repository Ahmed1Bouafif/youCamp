var express = require("express");
var router = express.Router()
var db = require('../db/index.js')

router.route("/signup")
.post((req,res)=>{
    let posting='insert into users (userName,firstName,Adress,phoneNumber,password) values (?,?,?,?,?) ' 
    db.query(posting,[req.body.userName,req.body.firstName,req.body.Adress,req.body.phoneNumber,req.body.password],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.send(data)
        }
    })
})



    
module.exports = router   