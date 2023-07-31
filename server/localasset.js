// Reads in the cloudinary env variable
require("dotenv").config();
// Aliasing version 2 and referencing with a variable
const cloudinary = require("cloudinary").v2;
// Cloudinary picks up env and is now configured
console.log(cloudinary.config().cloud_name);

