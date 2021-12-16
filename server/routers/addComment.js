var express = require("express");
var router = express.Router()
var db = require('../db/index.js')
router.route("/")
.put((req,res)=>{
    let arr=[]
    arr.push(req.body.content)
    db.query()
})
module.exports = router