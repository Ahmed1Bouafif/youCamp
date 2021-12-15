var express = require('express');
var app = express();
var db = require('./db/index.js')

var bodyParser = require('body-parser');

var router = express.Router()
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
var router1 = require('./routers/router1.js')
var test = require('./routers/test.js')

app.use("/",router1);
app.use("/api/test",test)




const server = app.listen(4000, function(){
    console.log('server is running at %s', server.address().port);
});