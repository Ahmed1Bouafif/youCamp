var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/")
.get((req,res)=>{
    let getting=' select * from sellproducts '
    db.query(getting,(err,products)=>{
        if(err){
            console.log(err)
        }else{
            res.send(products)
        }
    })
})

    
module.exports = router  