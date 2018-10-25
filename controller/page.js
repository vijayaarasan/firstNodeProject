let page = require('../service/page');


module.exports.one = function (req, res) {
    let apione = req.param('apione');
    if (!apione) {
        res.send('wrong query');
    } else {
        res.send('succesfully got api one');
    }
};
module.exports.two = function (req, res) {
    res.send('succesfully got api two');
};

module.exports.three = function (req, res) {
    let name = req.param('name');
    if (!name) {
        res.send('wrong query');
    } else {
        res.send('Hello' + name + '!');
    }
};
module.exports.samplebody = function (req, res) {
    let body = req.body;
    if (!body) {
        res.send('No content found.');
    } else {
        res.send(body);
    }
};

module.exports.postPage = function (req, res) {
    let data = req.body;
    page.postPage(data, function (data, err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(data);
        }
    });
};