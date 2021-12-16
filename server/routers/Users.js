var express = require("express");
var router = express.Router()
var db = require('../db/index.js');


router.route("/signup")

// .post((req.res)=>{
//     db.query('select userId from users where userName=?',[req.body.userName],(err,result)=>{
//     if(result.length!==0){
//         res.send('userName exists')
//     }else{
//         db.query('insert into users (userName,firstName,Adress,phoneNumber,password) values (?,?,?,?,?) ',)
//     }
// })
    


.post((req,res)=>{
    db.query('select userId from users where userName=?',[req.body.userName],(err,result)=>{
        if(result.length!==0){
            res.json('username exists')
        }else{
    let posting='insert into users (userName,firstName,Adress,phoneNumber,password) values (?,?,?,?,?) ' 
    db.query(posting,[req.body.userName,req.body.firstName,req.body.Adress,req.body.phoneNumber,req.body.password],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log(data)
            res.send(data)
        }
    
    })}
})})



    
module.exports = router 