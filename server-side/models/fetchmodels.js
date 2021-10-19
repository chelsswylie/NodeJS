var mongoose = require("mongoose");
const Schema = mongoose.Schema;
// var db = require("../../database");
// create an schema
var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  address_one: String,
  address_two: String,
  city: String,
  state: String,
  zip: String,
});
userTable = mongoose.model("users", userSchema);

module.exports = userSchema;

// this file is here to support posting data from frontend to db
