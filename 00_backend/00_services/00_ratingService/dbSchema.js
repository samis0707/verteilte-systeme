//Mongoose
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
        rewuired: false
    }

});
module.exports = mongoose.model('dbSchema', ratingMusterSchema)