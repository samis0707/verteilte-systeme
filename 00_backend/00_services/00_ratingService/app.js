const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


// basic endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/bier', (req, res) => {
    res.status(200).json({bier: "malzbier"});
})

app.get('/wein', (req, res) => {
    res.send('rot oder weiß?')
})

// basic params
app.get('/wein/:sorte', (req, res) => {

    if (req.params.sorte == "Weisswein") {
        res.json({ wein: "Riesling" });
    } else {
        res.status(404).json({message: "Kein passender Wein gefunden" })
    }
})

// POST methods
app.use(express.json());
app.post('/echo', (req, res) => {
    console.log(req.body);
    console.log("Der übergebene Name ist: " + req.body.name)
    res.send(req.body);
})


// Port lauschen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
