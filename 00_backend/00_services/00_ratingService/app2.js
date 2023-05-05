const express = require('express');
const app = express();
const port = 3001;

app.get('/', authentication, (req, res) => {
    res.send("Diese Seite ist geheim");
})

app.get('/geheimnis', authentication, (req, res) => {
    const geheimnis = [{
            kontonummer: 123456,
            pin: "1234",
        },
        {
            id: 234567,
            name: "6758",
        }
    ];
    res.json(geheimnis);
})


app.get('/login', (req, res) => {
    res.send("Bitte loggen Sie sich ein");
})

function authentication(req, res, next) {
    const wertAusdemParameterAuthorization = req.headers.authorization;
    if (wertAusdemParameterAuthorization === 'password') {
        next();
    } else {
        res.status(401);
        res.send('Access forbidden');

        res.redirect('/login');

    }
}

app.listen(port, () => {
    console.log("Server gestartet");
})