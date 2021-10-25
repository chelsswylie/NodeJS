const express = require("express");
var app = express();
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://Sofie:P4ssw0rd@Registrants.gnzcn.mongodb.net/Registrants?retryWrites=true&w=majority";

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
var commonRouter = require("../server-side/routes/fetchroutes");
var commonModel = require("../server-side/models/fetchmodels");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/fetchroutes", commonRouter);
app.all("/Home", function (request, response) {
  response.send({ express: "Hey this works" });
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  // this shows in terminal
  // db.close();
});
console.log("This is the db", db);

app.all("/Registration", function (request, response) {
  db.collection("users")
    .insert({
      first_name: "Chris",
      last_name: "Wylie",
      address_one: "12737 Commonwealth",
      address_two: null,
      city: "Las Vegas",
      state: "NV",
      zip: "56656",
    })
    function(error, result) {
      if (error) {
        return response.status(500).send(error);
      }
      response.send(result);
    };
  console.log("the result", result);
});

app.all("/Administration", function (request, response) {
  response.send({
    // result
    firstname: "Jimi",
    lastname: "Hendrix",
    addressOne: "213 Rock",
    addressTwo: "PO BOX 616",
    City: "Chicago",
    State: "IL",
    ZIP: "45678",
  });
});

mongoose.connect(
  mongoDB,

  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.listen(10001, function () {
  console.log("Started application on port %d", 10001);
  // shows in terminal
});
