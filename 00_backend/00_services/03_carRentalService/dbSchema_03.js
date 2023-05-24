//Mongoose
const mongoose = require('mongoose');

const hotelMusterSchema = new mongoose.Schema({

    pricePerDay: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Number,
        required: true
    },
    doorQuant: {
        type: Number,
        required: true
    },
    seats: {
        type: Number,
        required: true
    }
    /*created_from: {
        type: Date,
        required: true
    }*/

});
module.exports = mongoose.model('dbSchema_03', hotelMusterSchema)