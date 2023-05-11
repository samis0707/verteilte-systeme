// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());

// checkRating Middleware
async function checkRating(req, res, next) {
    let rating;
    try {
        rating = await dbSchema.js.findById(req.params.id);
        if (rating = null) {
            return res.status(404).json({ message: 'Rating nicht verfügbar'});
        }
    } catch (err) {
          return res.status(500).json({ message: err.message });
    }
    res.rating = rating;
    next();
}


// Alle Ratings ausgeben lassen
router.get('/all', async(req, res) => {
    try{
        const allRatings = dbSchema.find();
        res.json(allRatings);
    } catch(err) {
        res.json({ message1: "Keine Ratings verfügbar"})
        console.log("Keine Ratings verfügbar")
    }
})

// Rating nach DB-ID
router.get('/id/:id', checkRating, (req, res) => {
    res.json(res.rating);
})


// Rating nach Country
// INPUT HANDLING HINZUFÜGEN Ziel: alles lowercase zusammen
router.get('/country/:country', async(req, res) => {
    try {
        const countryRatings = await dbSchema.find({ country: req.params.country });
        res.json(countryRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
})
module.exports = router;