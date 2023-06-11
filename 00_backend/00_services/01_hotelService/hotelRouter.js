// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema_01');

const router = express.Router();

//CORS für Cross Site Requests
const cors = require('cors');
router.use(cors());

// Server soll mit JSON arbeiten dürfen
router.use(express.json());



// MIDDLEWARE
// checkHotel Middleware
async function checkHotel(req, res, next) {
    let hotel;
    try {
        console.log("middleware fragt nach id..")
        hotel = await dbSchema.findById(req.params.id);
        if (hotel == null) {
            return res.status(404).json({ message: 'Hotel nicht verfügbar'});
        }
    } catch (err) {
        console.log("Hängt in der middleWare fest")
        return res.status(500).json({ message: err.message });
          
    }
    res.hotel = hotel;
    next();
};



// GET-METHODS
// Alle Hotels ausgeben lassen
router.get('/all', async(req, res) => {
    try{
        const allhotels = await dbSchema.find();
        res.json(allhotels);
    } catch(err) {
        res.json({ message: "Keine Hotels verfügbar"})
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach db-id
router.get('/id/:id', checkHotel, (req, res) => {
    res.json(res.hotel);
});

// Hotel nach price
router.get('/price/:price', async(req, res) => {
    try {
        // Input aufbereiten und in db suchen
        const priceHotels = await dbSchema.find({ price: req.params.price.toLowerCase() });
        res.json(priceHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach price_category 
router.get('/price_category/:price_category', async(req, res) => {
    // hier muss noch abfrage nach array input [günstig, ok, teuer]
    try {
        // Input aufbereiten und in db suchen
        const price_categoryHotels = await dbSchema.find({ price_category: req.params.price_category.toLowerCase() });
        res.json(price_categoryHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach beds
router.get('/beds/:beds', async (req, res) => {
    try {
        // in nummer umwandeln und checken ob zwischen 1 und 5
        const beds = parseInt(req.params.beds)
        if (isNaN(beds) || beds < 1 || beds > 6) {
            return res.status(400).json({ error: 'Anzahl der Betten muss zwischen 1 und 5 liegen' });
        }
        const bedsHotel = await dbSchema.find({ beds });
        res.json(bedsHotel);
    } catch (err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
  });

// Hotel nach title
router.get('/title/:title', async(req, res) => {
    try {
        // mit regex und options reichen auch teile des titels und gross kleinschreibung ist unwichtig
        const titleHotels = await dbSchema.find({ title: {$regex:req.params.title, $options: "i" } });
        res.json(titleHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach description
router.get('/description/:description', async(req, res) => {
    try {
        const descriptionHotels = await dbSchema.find({ description: {$regex:req.params.description, $options: "i" } });
        res.json(descriptionHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach country
router.get('/country/:country', async(req, res) => {
    try {
        const countryHotels = await dbSchema.find({ country: {$regex:req.params.country, $options: "i" } });
        res.json(countryHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});

// Hotel nach city
router.get('/city/:city', async(req, res) => {
    try {
        const cityHotels = await dbSchema.find({ city: {$regex:req.params.city, $options: "i" } });
        res.json(cityHotels);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Hotels verfügbar")
    }
});



// POST-METHOD
router.post('/add', async (req, res) => {
    try {
        const newHotel = new dbSchema({
            // INPUT-HANDLING: Hier muss eigentlich gecheckt werden ob man eine zulässig category eingefügt hat
            price: req.body.price,
            price_category: req.body.price_category,
            beds: req.body.beds,
            title: req.body.title,
            description:  req.body.description,
            country: req.body.country,
            city: req.body.city,
            // Timestamp automatisch einfügen
            // created_from: req.body.created_from
        })
        res.status(201).json(await newHotel.save());
    } catch (err) {
        res.status(400).json({message: err.message});
    }
});



// PUT-METHOD
router.put('/:id', checkHotel, async(req, res) => {
    try {
        res.hotel.price = req.body.price;
        res.hotel.price_category = req.body.price_category;
        res.hotel.beds = req.body.beds;
        res.hotel.title = req.body.title;
        res.hotel.description = req.body.description;
        res.hotel.country = req.body.country;
        res.hotel.city = req.body.city;

        const updatedHotel = await res.hotel.save();
        res.status(201).json(updatedHotel);

    } catch (err) { 
        res.status(400).json({ message: err.message });
    }
})



// PATCH-METHODS
// Eventuell später


// DELETE-METHODS
router.delete('/:id', checkHotel, async(req, res) => {
    try {
        await dbSchema.deleteOne(res.hotel);
        res.status(200).json({ "message": "Eintrag gelöscht" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

})
module.exports = router;