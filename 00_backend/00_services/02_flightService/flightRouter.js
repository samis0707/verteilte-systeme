// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema_02');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());



// MIDDLEWARE
// checkFlight Middleware
async function checkFlight(req, res, next) {
    let flight;
    try {
        console.log("middleware fragt nach id..")
        flight = await dbSchema.findById(req.params.id);
        if (flight == null) {
            return res.status(404).json({ message: 'flight nicht verfügbar'});
        }
    } catch (err) {
        console.log("Hängt in der middleWare fest")
        return res.status(500).json({ message: err.message });
          
    }
    res.flight = flight;
    next();
};



// GET-METHODS
// Alle flights ausgeben lassen
router.get('/all', async(req, res) => {
    try{
        const allFlights = await dbSchema.find();
        res.json(allFlights);
    } catch(err) {
        res.json({ message: "Keine flights verfügbar"})
        console.log("Keine flights verfügbar")
    }
});

// flight nach db-id
router.get('/id/:id', checkFlight, (req, res) => {
    res.json(res.flight);
});

// flight nach price_category 
router.get('/price_category/:price_category', async(req, res) => {
    // hier muss noch abfrage nach array input [günstig, ok, teuer]
    try {
        // Input aufbereiten und in db suchen
        const price_categoryFlights = await dbSchema.find({ price_category: req.params.price_category.toLowerCase() });
        res.json(price_categoryFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach beds
router.get('/beds/:beds', async (req, res) => {
    try {
        // in nummer umwandeln und checken ob zwischen 1 und 5
        const beds = parseInt(req.params.beds)
        if (isNaN(beds) || beds < 1 || beds > 6) {
            return res.status(400).json({ error: 'Anzahl der Betten muss zwischen 1 und 5 liegen' });
        }
        const bedsFlight = await dbSchema.find({ beds });
        res.json(bedsFlight);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
  });

// flight nach title
router.get('/title/:title', async(req, res) => {
    try {
        // mit regex und options reichen auch teile des titels und gross kleinschreibung ist unwichtig
        const titleFlights = await dbSchema.find({ title: {$regex:req.params.title, $options: "i" } });
        res.json(titleFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach description
router.get('/description/:description', async(req, res) => {
    try {
        const descriptionFlights = await dbSchema.find({ description: {$regex:req.params.description, $options: "i" } });
        res.json(descriptionFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach country
router.get('/country/:country', async(req, res) => {
    try {
        const countryFlights = await dbSchema.find({ country: {$regex:req.params.country, $options: "i" } });
        res.json(countryFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach city
router.get('/city/:city', async(req, res) => {
    try {
        const cityFlights = await dbSchema.find({ city: {$regex:req.params.city, $options: "i" } });
        res.json(cityFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});



// POST-METHOD
router.post('/add', async (req, res) => {
    try {
        const newFlight = new dbSchema({
            // INPUT-HANDLING: Hier muss eigentlich gecheckt werden ob man eine zulässig category eingefügt hat
            price_category: req.body.price_category,
            beds: req.body.beds,
            title: req.body.title,
            description:  req.body.description,
            country: req.body.country,
            city: req.body.city,
            // Timestamp automatisch einfügen
            // created_from: req.body.created_from
        })
        res.status(201).json(await newFlight.save());
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});



// PUT-METHOD
router.put('/:id', checkFlight, async(req, res) => {
    try {
        res.flight.price_category = req.body.price_category;
        res.flight.beds = req.body.beds;
        res.flight.title = req.body.title;
        res.flight.description = req.body.description;
        res.flight.country = req.body.country;
        res.flight.city = req.body.city;

        const updatedflight = await res.flight.save();
        res.status(201).json(updatedflight);

    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
})



// PATCH-METHODS
// Eventuell später


// DELETE-METHODS
router.delete('/:id', checkFlight, async(req, res) => {
    try {
        await dbSchema.deleteOne(res.flight);
        res.status(200).json({ "message": "Eintrag gelöscht" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})
module.exports = router;