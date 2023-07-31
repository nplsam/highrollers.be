const express = require('express');
const cors = require('cors');
const countries = require('./countries');

// STARTING THE SERVER
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROOT (BASIC STRING)
app.get('/', (req, res) => {
    res.send(`Welcome to the High Rollers API!`)
})

// INDEX ACTION (Grab countries, temporary)
app.get('/countries', (req, res) => {
    res.send(countries);
})

module.exports = app;

