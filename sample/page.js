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