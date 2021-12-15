var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/")
.post((req,res)=>{
    let posting='insert into sellproducts (productName,price,img) values (?,?,?) '
    db.query(posting,[req.body.productName,req.body.price,req.body.img],(err,data)=>{
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
})

    
module.exports = router   

