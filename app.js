var express = require('express'),
  app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


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





app.listen(port, ip, function () {
    console.log("Listening on " + ip + ", port " + 8080)
});

module.exports = app;