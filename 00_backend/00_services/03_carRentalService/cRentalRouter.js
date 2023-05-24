// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema_03');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());



// MIDDLEWARE
// checkCRental Middleware
async function checkCRental(req, res, next) {
    let cRental;
    try {
        console.log("middleware fragt nach id..")
        cRental = await dbSchema.findById(req.params.id);
        if (cRental == null) {
            return res.status(404).json({ message: 'Flug nicht verfügbar'});
        }
    } catch (err) {
        console.log("Hängt in der middleWare fest")
        return res.status(500).json({ message: err.message });
          
    }
    res.cRental = cRental;
    next();
};



// GET-METHODS
// Alle cRentals ausgeben lassen
router.get('/all', async(req, res) => {
    try{
        const allCRental = await dbSchema.find();
        res.json(allCRental);
    } catch(err) {
        res.json({ message: "Keine car rentals verfügbar"})
        console.log("Keine car rentals verfügbar")
    }
});

// cRentals nach db-id
router.get('/id/:id', checkCRental, (req, res) => {
    res.json(res.cRental);
});

// cRentals nach pricePerDay
router.get('/pricePerDay/:pricePerDay', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const pricePerDayCRentals = await dbSchema.find({ pricePerDay });
        res.json(pricePerDayCRentals);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
});

// cRentals nach brand
router.get('/brand/:brand', async (req, res) => {
    try {
        // heir ein paar brands zu auswahl
        const brandCRentals = await dbSchema.find({ brand });
        res.json(brandCRentals);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
  });

// cRentals nach model
router.get('/model/:model', async (req, res) => {
    try {
        // hier wäre geil mit den Flughafen Codes FRA, YYZ, etc.
        const modelCRentals = await dbSchema.find({ model });
        res.json(modelCRentals);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
  });

// cRental nach releaseDate
router.get('/releasDate/:releaseDate', async (req, res) => {
    try {
        // hier muss eine Uhrzeit rein unixtimestamp
        const releaseDateCRental = await dbSchema.find({ releaseDate });
        res.json(releaseDateCRental);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
  });

// cRental nach doorQuant
router.get('/doorQuant/:doorQuant', async(req, res) => {
    try {
        // Input handling bei put: [economy, business]
        const doorQuantCRentals = await dbSchema.find({ doorQuant });
        res.json(doorQuantCRentals);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
});

// cRental nach seats
router.get('/seats/:seats', async(req, res) => {
    try {
        const seatsCRental = await dbSchema.find({ seats });
        res.json(seatsCRental);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
});


// POST-METHOD
router.post('/add', async (req, res) => {
    try {
        const newCRental = new dbSchema({
            // INPUT-HANDLING: Hier muss eigentlich gecheckt werden ob man eine zulässig category eingefügt hat
            pricePerDay: req.body.pricePerDay,
            brand: req.body.brand,
            model: req.body.model,
            releaseDate:  req.body.releaseDate,
            flightClass: req.body.flightClass,
            doorQuant: req.body.doorQuant,
            seats: req.body.seats,
            // Timestamp automatisch einfügen
            // created_from: req.body.created_from
        })
        res.status(201).json(await newCRental.save());
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});



// PUT-METHOD
router.put('/:id', checkFlight, async(req, res) => {
    try {
        res.flight.price_per_seat = req.body.price_per_seat;
        res.flight.start = req.body.start;
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