var express = require('express');
var app = express();
var db = require('./db/index.js')
var json = require('express-json')
var bodyParser = require('body-parser');
var router = express.Router()
var cors = require('cors');
app.use(express.json())
app.use(cors());
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
var router1 = require('./routers/router1.js')
var test = require('./routers/test.js')
var addingproduct = require('./routers/MarketProducts.js')
var gettingMarketProducts=require('./routers/MarketPructsGet.js')
var addComment = require('./routers/addComment.js')
var addPost = require('./routers/addPost.js')
app.use("/",router1);
app.use("/api/test",test)
app.use("/api/addproduct",addingproduct)
app.use("/api/marketP",gettingMarketProducts)
app.use("/posts",addPost)
app.use("/api/addComment/:_id",addComment)




const server = app.listen(4000, function(){
    console.log('server is running at %s', server.address().port);
});