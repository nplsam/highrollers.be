const express = require('express');
const cors = require('cors');
const countries = require('./countries');

// CLOUDINARY

require("dotenv").config();
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

// STARTING THE SERVER
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROOT (BASIC STRING)
app.get('/', (req, res) => {
    res.send(`Welcome to the High Rollers API!`)
})

// INDEX ACTION (grab countries images)
app.get('/countries', (req, res) => {
    res.send(countries);
})

// SHOW ACTION (random country image)
app.get('/countries/random', (req, res) => {
    const randIdx = Math.floor(Math.random() * (countries.length))
    res.send(countries[randIdx]);
})

// SHOW ACTION (random country images easy questions)
app.get('/countries/random/easy', (req, res) => {
    const easyCountries = countries.slice(0, 10)
    const randIdx = Math.floor(Math.random() * easyCountries.length)
    res.send(easyCountries[randIdx]);
})

// SHOW ACTION (random country images medium questions)
app.get('/countries/random/medium', (req, res) => {
    const mediumCountries = countries.slice(11, 20)
    const randIdx = Math.floor(Math.random() * mediumCountries.length)
    res.send(mediumCountries[randIdx]);
})

// SHOW ACTION (random country images hard questions)
app.get('/countries/random/hard', (req, res) => {
    const hardCountries = countries.slice(21, 30)
    const randIdx = Math.floor(Math.random() * hardCountries.length)
    res.send(hardCountries[randIdx]);
})

// SHOW ACTION 
app.get('/countries/:id', (req, res) => {
    const idx = req.params.id-1;
    const foundCountry = countries[idx]
    if (!foundCountry) {
        res.status(404).send({ message: `Country with id number ${idx+1} not found` })
    } else {
        res.send(foundCountry);
    }
})

// INDEX ACTION (Grabs images public-ids)
app.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder: highroller-countries')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute()
    const images = resources.map((file) => file.public_id);
    res.send(images);
})


module.exports = app;

