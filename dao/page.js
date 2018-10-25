let Page = require('../model/page');

module.exports.postPage = (data, callback) => {
    let pageData = new Page(data);
    pageData.save(function (err, pageRespData) {
        if (err) {
            callback(err);
        } else {
            callback(pageRespData);
        }
    });
};