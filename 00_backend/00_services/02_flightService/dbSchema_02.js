//Mongoose
const mongoose = require('mongoose');

// Musterschema für ein Rating das in der Datenbanbk abgelegt wird
const hotelMusterSchema = new mongoose.Schema({

    pricePerSeat: {
        type: Number,
        required: true
    },
    start: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flightTime: {
        type: Number,
        required: true
    },
    flightClass: {
        type: String,
        required: true
    },
    departureTime: {
        type: Number,
        required: true
    },
    departureDate: {
        type: Number,
        required: true
    },
    arrivalTime: {
        type: Number,
        required: true
    },
    arrivalDate: {
        type: Number,
        required: true
    }
    /*created_from: {
        type: Date,
        required: true
    }*/

});
module.exports = mongoose.model('dbSchema_02', hotelMusterSchema)