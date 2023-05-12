// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());

// MIDDLEWARE
// checkRating Middleware
async function checkRating(req, res, next) {
    let rating;
    try {
        console.log("middleware fragt nach id..")
        rating = await dbSchema.findById(req.params.id);
        if (rating == null) {
            return res.status(404).json({ message: 'Rating nicht verfügbar'});
        }
    } catch (err) {
        console.log("Hängt in der middleWare fest")
        return res.status(500).json({ message: err.message });
          
    }
    res.rating = rating;
    next();
};

// GET-METHODS

// Alle Ratings ausgeben lassen
router.get('/all', async(req, res) => {
    try{
        const allRatings = await dbSchema.find();
        res.json(allRatings);
    } catch(err) {
        res.json({ message: "Keine Ratings verfügbar"})
        console.log("Keine Ratings verfügbar")
    }
});

// Rating nach db-id
router.get('/id/:id', checkRating, (req, res) => {
    res.json(res.rating);
});

// Rating nach category 
router.get('/category/:category', async(req, res) => {
    // hier muss noch abfrage nach array input [country, city, activity, carrental, restaurant]
    try {
        // Input aufbereiten und in db suchen
        const categoryRatings = await dbSchema.find({ category: req.params.category.toLowerCase() });
        res.json(categoryRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
});

// Rating nach rating
router.get('/rating/:rating', async (req, res) => {
    try {
        // in nummer umwandeln und checken ob zwischen 1 und 10
        const rating = parseInt(req.params.rating);
        if (isNaN(rating) || rating >= 1 || rating <= 10) {
            return res.status(400).json({ error: 'Rating muss Zahl zwischen 1 und 10 sein' });
        }
        const ratingRatings = await dbSchema.find({ rating });
        res.json(ratingRatings);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
  });

// Rating nach title
router.get('/title/:title', async(req, res) => {
    try {
        const titleRatings = await dbSchema.find({ title: req.params.title });
        res.json(titleRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
});

// Rating nach description
router.get('/description/:description', async(req, res) => {
    try {
        const descriptionRatings = await dbSchema.find({ description: req.params.description });
        res.json(descriptionRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
});

// Rating nach country
router.get('/country/:country', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const countryRatings = await dbSchema.find({ country: req.params.country.toLowerCase() });
        res.json(countryRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
});

// Rating nach city
router.get('/city/:city', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const cityRatings = await dbSchema.find({ city: req.params.city.toLowerCase() });
        res.json(cityRatings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
});





// POST-METHOD
router.post('/add', async (req, res) => {
    try {
        const newRating = new dbSchema({
            // INPUT-HANDLING: Hier muss eigentlich gecheckt werden ob man eine zulässig category eingefügt hat
            category: req.body.category,
            rating: req.body.rating,
            title: req.body.title,
            description:  req.body.description,
            country: req.body.country,
            city: req.body.city,
            // Timestamp automatisch einfügen
            // created_from: req.body.created_from
        })
        res.status(201).json(await newRating.save());
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});


module.exports = router;