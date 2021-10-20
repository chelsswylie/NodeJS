var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  address_one: String,
  address_two: String,
  city: String,
  state: String,
  zip: String,
});
//

// Note: Declaring our URLs as a virtual in the schema is a good idea because then the URL for an item only ever needs to be changed in one place.
userSchema.virtual("url").get(function () {
  return "/Administration" + this._id;
});
module.exports = mongoose.model("users", userSchema);

// this file is here to support posting data from frontend to db
