// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());

// checkRating Middleware




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
router.get('/:id', checkRating, (req, res) => {
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
    }
})
module.exports = router;