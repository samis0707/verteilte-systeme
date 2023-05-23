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
            return res.status(404).json({ message: 'Flug nicht verfügbar'});
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

// flight nach pricePerSeat
router.get('/pricePerSeat/:pricePerSeat', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const pricePerSeatFlights = await dbSchema.find({ pricePerSeat });
        res.json(pricePerSeatFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach start
router.get('/start/:start', async (req, res) => {
    try {
        // hier wäre geil mit den Flughafen Codes FRA, YYZ, etc.
        const startFlights = await dbSchema.find({ start });
        res.json(startFlights);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
  });

// flight nach destination
router.get('/destination/:destination', async (req, res) => {
    try {
        // hier wäre geil mit den Flughafen Codes FRA, YYZ, etc.
        const destinationFlights = await dbSchema.find({ destination });
        res.json(destinationFlights);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
  });

// flight nach flightTime
router.get('/flightTime/:flightTime', async (req, res) => {
    try {
        // hier wäre geil mit den Flughafen Codes FRA, YYZ, etc.
        const flightTimeFlights = await dbSchema.find({ flightTime });
        res.json(flightTimeFlights);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
  });

// flight nach flightClass
router.get('/flightClass/:flightClass', async(req, res) => {
    try {
        const flightClassFlights = await dbSchema.find({ flightClass });
        res.json(flightClassFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach departureTime
router.get('/departureTime/:departureTime', async(req, res) => {
    try {
        const departureTimeFlights = await dbSchema.find({ departureTime });
        res.json(departureTimeFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach departureDate
router.get('/departureDate/:departureDate', async(req, res) => {
    try {
        const departureDateFlights = await dbSchema.find({ departureDate });
        res.json(departureDateFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});

// flight nach arrivalTime
router.get('/arrivalTime/:arrivalTime', async(req, res) => {
    try {
        const arrivalTimeFlights = await dbSchema.find({ arrivalTime });
        res.json(arrivalTimeFlights);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine flights verfügbar")
    }
});
// flight nach arrivalDate
router.get('/arrivalDate/:arrivalDate', async(req, res) => {
    try {
        const arrivalDateFlights = await dbSchema.find({ arrivalDate });
        res.json(arrivalDateFlights);
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
            pricePerSeat: req.body.pricePerSeat,
            start: req.body.start,
            destination: req.body.destination,
            flightTime:  req.body.flightTime,
            flightClass: req.body.flightClass,
            departureTime: req.body.departureTime,
            departureDate: req.body.departureDate,
            arrivalTime: req.body.arrivalTime,
            arrivalDate: req.body.arrivalDate
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