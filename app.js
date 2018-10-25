var express = require('express'),
  app = express();




var bodyparser = require('body-parser');
var sampRoute = require('./route/route');

app.get('/', function (req, res) {
    res.send('Hello from NodeJS  at ' + new Date() + 'Running Successfully.' +
        'commit working...');
});
app.get('/smp1', function (req, res) {
    res.send('Sample one is running...');

});
app.get('/smp2', function (req, res) {
    res.send('Sample two is running...');

});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/sapi', sampRoute);



var mongoose = require('mongoose');
var baseConfig = require('./config/database/devConfig');
// var auditLog = require('audit-log');

// MongoDB Connection
const options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0
};
mongoose.connect(baseConfig.mongoURL, options, function(err){
    if(err){
        console.log(err);// eslint-disable-line
    }
    console.log('Open Database Connection Success');// eslint-disable-line
});

// auditLog.addTransport('mongoose', { connectionString: baseConfig.mongoURL });
// auditLog.addTransport('console');

app.listen(baseConfig.port, baseConfig.ip, function () {
    console.log("Listening on " + baseConfig.ip + ", port " + 8080)
});

module.exports = app;