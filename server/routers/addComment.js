var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/comment")
.post((req,res)=>{
    db.query("insert into posts (content) values(?)",[req.body.content],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            db.query("select * from comments",(err,result)=>{
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