var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/comment")
.get((req,res)=>{
    db.query("select * from comments",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result)
        }
    })
})
module.exports = router