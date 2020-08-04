const Investor = require('../models/investor');


module.exports = {
    index
}

function index(req, res) {
    let userID = null;
    if (req.user) {
        userID = req.user._id;
    }

    Investor.findById(userID, function (err, user) {
        res.render('index', {
            user,
        });
    });
}