const mongoose = require('mongoose');

const Schema = mongoose.Schema


const scompSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        default: 'MSFT'
    },
    open: String,
    high: String,
    low: String,
    close: String,
    volume: String,
    unique: true
})

module.exports = mongoose.model('Stock', scompSchema);
