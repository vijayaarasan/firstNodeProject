let page = require('../dao/page');

module.exports.postPage = (data, callback) => {
    page.postPage(data, function (err, result) {
        if (err) {
            callback(err);
        } else {
            callback(result);
        }
    });
};