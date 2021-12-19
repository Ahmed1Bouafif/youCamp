var express = require("express");
var router = express.Router()
var db = require('../db/index.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;




router.route("/login")

.post((req,res)=>{
    // console.log(req.body)
    db.query('select * from users where userName=?',[req.body.userName],(err,result)=>{
        if(err){
            console.log("userName wrong")
        }else{
            // console.log(result)
            bcrypt.compare(req.body.password, result[0].password, function(err, response) {
                console.log(result[0].password)
                if(err){
                    console.log(err)
                    console.log("password is wrong")
                }else{
                    // console.log(response)
                    res.send(result)
                }
              })}
    })
})

module.exports = router 

