/* Packages:
    express
    nodemon
    mongoose
    dotenv
    cors
*/

//Express.JS
const express = require('express');
const app = express();

//DOTENV einbinden
require('dotenv').config();

//Mongoose einbinden für Datenbankabfragen
const mongoose = require('mongoose');

//DOTENV Konfigurationen beziehen
const port = process.env.PORT;

//Cross-Site Requests ermöglichen
const cors = require('cors');

//Datenbankverbindung aufbauen
mongoose.connect(
    process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
);

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Database Connected"));

//Routes