const mongoose = require('mongoose');

const Schema = mongoose.Schema


const scompSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
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
    
})

module.exports = mongoose.model('Stock', scompSchema);
