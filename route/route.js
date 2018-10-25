var express = require('express');
var sampRoute = express.Router();
var samplePage = require('../controller/page');
sampRoute.get('/smp1', samplePage.one);
sampRoute.get('/smp2', samplePage.two);
sampRoute.post('/smp3', samplePage.three);
sampRoute.post('/smpb', samplePage.samplebody);
sampRoute.post('/page', samplePage.postPage);
module.exports = sampRoute;