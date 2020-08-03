const mongoose = require('mongoose');// this line is utilize the mongoose package

const Schema = mongoose.Schema;

const stockListSchema = new Schema ({
    stock: [{type: Schema.Types.ObjectId, ref: 'Stock'}],
    type: Date,
})

const investorSchema = new Schema({
    name: String,
    email: String,
    portfolio: [stockListSchema],
    googleId: String
})






module.exports = mongoose.model('Investor', investorSchema)