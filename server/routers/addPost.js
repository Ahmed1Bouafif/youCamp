var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/")
.get((req,res)=>{
    db.query("select * from posts",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
.post("add",(req,res)=>{
    db.query("insert into posts (content ,imgUrl) values(?,?)",[req.body.content,req.body.imgUrl],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            db.query("select * from posts",(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    res.send(result)
                }
            })
        }
    })
        
})
module.exports = router