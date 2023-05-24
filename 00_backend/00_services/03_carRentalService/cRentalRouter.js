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
            return res.status(404).json({ message: "Keine car rentals verfügbar"});
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
router.get('/priceperday/:priceperday', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const pricePerDayCRentals = await dbSchema.find({ pricePerDay: req.params.priceperday });
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
        const brandCRentals = await dbSchema.find({ brand: {$regex:req.params.brand, $options: "i" } });
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
        const modelCRentals = await dbSchema.find({ model: {$regex:req.params.model, $options: "i" } });
        res.json(modelCRentals);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
  });

// cRental nach releaseDate
router.get('/releasedate/:releasedate', async (req, res) => {
    try {
        // hier muss eine Uhrzeit rein unixtimestamp
        const releaseDateCRental = await dbSchema.find({ releaseDate: req.params.releasedate });
        res.json(releaseDateCRental);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
  });

// cRental nach doorQuant
router.get('/doorquant/:doorquant', async(req, res) => {
    try {
        // Input handling bei put: [economy, business]
        const doorQuantCRentals = await dbSchema.find({ doorQuant: req.params.doorquant });
        res.json(doorQuantCRentals);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine car rentals verfügbar")
    }
});

// cRental nach seats
router.get('/seats/:seats', async(req, res) => {
    try {
        const seatsCRental = await dbSchema.find({ seats: req.params.seats });
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
router.put('/:id', checkCRental, async(req, res) => {
    try {
        res.cRental.pricePerDay = req.body.pricePerDay;
        res.cRental.brand = req.body.brand;
        res.cRental.model = req.body.model;
        res.cRental.releaseDate = req.body.releaseDate;
        res.cRental.doorQuant = req.body.doorQuant;
        res.cRental.seats = req.body.seats;

        const updatedcRental = await res.cRental.save();
        res.status(201).json(updatedcRental);

    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
})



// PATCH-METHODS
// Eventuell später


// DELETE-METHODS
router.delete('/:id', checkCRental, async(req, res) => {
    try {
        await dbSchema.deleteOne(res.cRental);
        res.status(200).json({ "message": "Eintrag gelöscht" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})
module.exports = router;