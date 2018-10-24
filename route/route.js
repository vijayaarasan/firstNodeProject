var express = require('express');
var sampRoute = express.Router();
var samplePage = require('../sample/page');
sampRoute.get('/smp1', samplePage.one);
sampRoute.get('/smp2', samplePage.two);
sampRoute.post('/smp3', samplePage.three);
module.exports = sampRoute;