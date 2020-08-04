const mongoose = require('mongoose');// this line is utilize the mongoose package

const Schema = mongoose.Schema;



const investorSchema = new Schema({
    name: String,
    email: String,
    portfolio: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
    googleId: String
})






module.exports = mongoose.model('Investor', investorSchema)