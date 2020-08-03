
const request = require('request');
const rootURL = "https://www.alphavantage.co/";
const Investor = require('../models/investor');

module.exports = {
  search
};


function search(req, res) {
  request(rootURL + "query?function=TIME_SERIES_DAILY&symbol=" + req.query.symbol + "&outputsize=full&apikey=" + process.env.API_KEY, function(error, response, body) {
     res.render('index', {
        body
     });
  });
}