const express = require("express");
var app = express();
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://Sofie:P4ssw0rd@Registrants.gnzcn.mongodb.net/Registrants?retryWrites=true&w=majority";

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
var commonRouter = require("../server-side/routes/fetchroutes");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/fetchroutes", commonRouter);
app.all("/Home", function (request, response) {
  response.send({ express: "Hey this works" });
});

app.all("/Registrants", function (request, response) {
  response.send({
    // request,
    firstname: "Jimi",
    lastname: "Hendrix",
    addressOne: "213 Rock",
    addressTwo: "PO BOX 616",
    City: "Chicago",
    State: "IL",
    ZIP: "45678",
  });
});

app.all("/Administration", function (request, response) {
  response.send({ express: request.params });
});

mongoose.connect(
  mongoDB,

  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
  // this shows in terminal
  // db.close();
});
console.log("This is the db", db.collection("users"));

app.listen(10001, function () {
  console.log("Started application on port %d", 10001);
  // shows in terminal
});
