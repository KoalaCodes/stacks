const Investor = require('../models/investor')
const Stock = require('../models/stock');

module.exports = {
    index,
    new: newStock,
   create, 
   delete: deleteStock,
  update,
  edit
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
    Investor.findById(req.user._id, function(err, investor){
        Stock.create(req.body, function(err, stock){
            if(err) console.log(err)
            investor.portfolio.push(stock) 
            investor.save( function(err){
                res.redirect('/stocks')
            })
           
           
        })
    })
    
}

function deleteStock(req, res) {
    console.log(req.params)
   Stock.findByIdAndDelete(req.params.id, function(err, stock){
       if (err) console.log(err)
       res.redirect('/stocks')
   }) 
    
}

function update(req, res) {
    Stock.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, stocks){
        res.redirect('/stocks') //req.body
    })
}

function edit(req, res) {
    Stock.findById(req.params.id, function(err, stock){
        res.render('investors/edit', {stock})
    })
}
