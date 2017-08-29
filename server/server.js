var express = require('express');
var server = express();
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var mongoose = require('mongoose');
var employeeInfo = require('./models/model');
var bodyParser = require('body-parser');
var routes = require('./route/route');

var accessLogStream = fs.createWriteStream(
    path.join(__dirname, './access.log'), { flags: 'a' }
);
// setup the logger 
server.use(morgan('combined', { stream: accessLogStream }));

mongoose.Promise = global.Promise;
//server connection with mongoose
mongoose.connect('mongodb://127.0.0.1/employeeDB');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

routes(server);

//server.set('view engine', 'html');
//server.set('views', path.join(__dirname, '../public/view'));
server.use(express.static(path.resolve(__dirname, '..', 'public')))

server.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

server.listen(3000, function () {
    console.log("server connected to port 3000");
});

