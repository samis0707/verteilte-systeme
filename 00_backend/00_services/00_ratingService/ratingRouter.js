// Express.JS
const express = require('express');
const dbSchema = require('./dbSchema');

const router = express.Router();

// Server soll mit JSON arbeiten dürfen
router.use(express.json());

// Alle Ratings ausgeben lassen
router.get('/', async(req, res) => {
    try{
        const ratings = dbSchema.find();
        res.json(ratings);
    } catch(err) {
        res.json({ message: err.message });
        console.log("Keine Ratings verfügbar")
    }
})

module.exports = router;