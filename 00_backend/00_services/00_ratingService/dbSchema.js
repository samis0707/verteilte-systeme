//Mongoose
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

// Musterschema für ein Rating das in der Datenbanbk abgelegt wird
const ratingMusterSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true
    },
    rating: {
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
module.exports = mongoose.model('dbSchema', ratingMusterSchema)