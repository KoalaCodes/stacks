const Investor = require('../models/investor');
const Stock = require('../models/stock');


module.exports = {
    show
}

function show(req, res) {
    Investor.findById(req.user._id, function(err, investor){
        Stock.find({investor: investor._id}, function(err, stocks){
            res.render('investors/show', { investor, stocks });
        })
    });
}