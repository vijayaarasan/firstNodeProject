var express = require('express'),
    fs = require('fs'),
    app = express();
// var html = require('./index.html');

var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
    res.send('Hello from NodeJS  at ' + new Date() + 'Running Successfully.' +
        'commit working...');
    
});

var bodyparser = require('body-parser');
var sampRoute = require('./route/route');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/sapi', sampRoute);




app.listen(port, ip, function () {
    console.log("Listening on " + ip + ", port " + 8080)
});

module.exports = app;