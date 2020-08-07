const Investor = require('../models/investor');
const Stock = require('../models/stock');


module.exports = {
    show
}

// function show(req, res) {
//     Investor.findById(req.user._id, function(err, investor){
//         Stock.find({investor: investor._id}, function(err, stocks){
//             res.render('investors/index', { investor, stocks });
//         })
//     });
// }

function show(req, res) {
   
    Investor.findById(req.user._id)
    .populate('portfolio').exec(function(err, investor) {
        // Stock.find(
        //     {_id: {$nin: investor.stock}},
        //     function(err, stock) {
        //         
                console.log(investor);
                res.render('investors/index', {
                    title: 'Dashboard', investor
                });
        
    });
}