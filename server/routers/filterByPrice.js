var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/")
.get((req,res)=>{
    let filter='select * from products order by price asc'
    db.query(filter,(err,products)=>{
        if(err){
            console.log(err)
        }
            else{
                res.send(products)
            }
        
    })
})
module.exports = router  

