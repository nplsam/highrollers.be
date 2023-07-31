// Reads in the cloudinary env variable
require("dotenv").config();
// Aliasing version 2 and referencing with a variable
const cloudinary = require("cloudinary").v2;
// Cloudinary picks up env and is now configured
console.log(cloudinary.config().cloud_name);

cloudinary.uploader
.upload("https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png", {
    // image is the default resource type if you don't specify
    public_id: "italy-flag"
})
.then((result) => {
    // JSON.stringify will provide a formatted string
    // 1st param is the vale to be output
    // 2nd param null is a function that can be applied to the output
    // 3rd param is the number of space characters to use for whitespace in formatting the output
    console.log("success", JSON.stringify(result, null, 2));
})
.catch((error) => {
    console.log("error", JSON.stringify(error, null, 2));
})
