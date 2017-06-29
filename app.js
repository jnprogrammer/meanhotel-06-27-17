require('./api/data/dbconnection.js').open();
var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');
var bodyParser = require('body-parser');

app.set('port',3000);

//Logging middle ware, must be above all res and req code
app.use(function(req,res,next){
    console.log(req.method,req.url);
    next();
});

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false})); //setting to true can give access to different data types

app.use('/api',routes);


var server = app.listen(app.get('port'),function(){
    var port = server.address().port;
    console.log("mean things are happening on port" + port);
});

console.log('me first, showing asynchronous functionality');