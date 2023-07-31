require("dotenv").config();
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

cloudinary.search
  .expression('resource_type:image AND tags=france')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute()
  .then(result=>console.log(result));