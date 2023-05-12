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
// Rating nach rating
// Rating nach title
// Rating nach description
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






// POST-METHOD
router.post('/add', async (req, res) => {
    try {
        const newRating = new dbSchema({
            // INPUT-HANDLING: Hier muss eigentlich gecheckt werden ob man eine zuLássig category eingefügt hat
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