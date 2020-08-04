const Stock = require('../models/stock');

module.exports = {
    index,
    new: newStock,
   create, 
   deleteOne
}

function index(req, res) {
    Stock.find({}, function(err, stocks){
        res.render('stocks/index', { title: 'All Stocks', stocks});
    });
}

function newStock(req, res) {
    res.render('stocks/new', {title: 'ADD A STOCK', Stock});
}

function create(req, res) {
    Stock.create(req.body, function(err, stock){
        if(err) console.log(err)
        res.redirect('/stocks')
    })
}

function deleteOne(req, res) {
   Stock.deleteOne(stock._id, function(err, stock){
       if (err) console.log(err)
       res.redirect('/stocks')
   }) 
    
}