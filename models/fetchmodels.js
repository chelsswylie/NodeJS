var mongoose = require("mongoose");
var db = require("../database");
// create an schema
var userSchema = new mongoose.Schema({
  full_name: String,
  email_address: String,
  city: String,
  country: String,
});
userTable = mongoose.model("users", userSchema);

module.exports = {
  fetchData: function (callback) {
    var userData = userTable.find({});
    userData.exec(function (err, data) {
      if (err) throw err;
      return callback(data);
    });
  },
};

// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//   },
// });

// const User = mongoose.model("User", UserSchema);

// module.exports = User;
