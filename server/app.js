const express = require('express');
const cors = require('cors');
const countries = require('./countries');

// CLOUDINARY CONFIG
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'dnkhcklqq', 
  api_key: '321129171882585', 
  api_secret: '9cgDb74RuxkTQkMsSXezPSvLeWY' 
});

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

