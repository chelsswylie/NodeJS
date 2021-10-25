console.log(
  "This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require("async");
var userData = require("./models/fetchmodels");
// above was "Book"

var mongoose = require("mongoose");
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var registrants = [];
// above was authors

// below was named authorCreate
function registrantCreate(
  first_name,
  last_name,
  address_one,
  address_two,
  city,
  state,
  zip,
  cb
) {
  registrantdetail = {
    first_name: first_name,
    last_name: last_name,
    address_one: address_one,
    address_two: address_two,
    city: city,
    state: state,
    zip: zip,
  };

  var user = new userData(registrantdetail);

  user.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("New Registrant: " + user);
    registrants.push(user);
    cb(null, user);
  });
}

// below was createGenreAuthors
function createRegistrants(cb) {
  async.series(
    [
      function (callback) {
        registrantCreate(
          // replace these values with the info we get from the form
          "Patrick",
          "Rothfuss",
          "123 Southfield",
          "PO BOX 12",
          "Southfield",
          "MI",
          "12345",
          callback
        );
      },
      function (callback) {
        registrantCreate(
          "Patrick",
          "Rothfuss",
          "123 Southfield",
          "PO BOX 12",
          "Southfield",
          "MI",
          "12345",
          callback
        );
      },
      function (callback) {
        registrantCreate(
          "Patrick",
          "Rothfuss",
          "123 Southfield",
          "PO BOX 12",
          "Southfield",
          "MI",
          "12345",
          callback
        );
      },
      function (callback) {
        registrantCreate(
          "Patrick",
          "Rothfuss",
          "123 Southfield",
          "PO BOX 12",
          "Southfield",
          "MI",
          "12345",
          callback
        );
      },
      function (callback) {
        registrantCreate(
          "Patrick",
          "Rothfuss",
          "123 Southfield",
          "PO BOX 12",
          "Southfield",
          "MI",
          "12345",
          callback
        );
      },
    ],
    // optional callback
    cb
  );
}

async.series(
  [createRegistrants]
  // Optional callback
);
