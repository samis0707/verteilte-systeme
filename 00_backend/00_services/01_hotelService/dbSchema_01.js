//Mongoose
const mongoose = require('mongoose');

const hotelMusterSchema = new mongoose.Schema({

    price: {
        type: Number,
        required: true
    },
    price_category: {
        type: String,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    /*created_from: {
        type: Date,
        required: true
    }*/

});
module.exports = mongoose.model('dbSchema_01', hotelMusterSchema)