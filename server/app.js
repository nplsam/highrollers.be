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

// INDEX ACTION (Grab countries images WIP)
app.get('/countries', (req, res) => {
    res.send(countries);
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

