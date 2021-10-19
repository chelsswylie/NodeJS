const express = require("express");
var app = express();
var mongoose = require("mongoose");
// var MongoClient = require("mongodb");
const Router = require("./server-side/routes/fetchroutes");
const bodyParser = require("body-parser");
const cors = require("cors");
// const fetchRouter = require('./server-side/routes/fetchroutes')
require("dotenv").config();
// var uri =
//   "mongodb+srv://Sofie:P4ssw0rd@Registrants.gnzcn.mongodb.net/Registrants?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/Home", function (request, response) {
  response.send({ express: "Hey this works" });
});

app.get("/Registrants", function (request, response) {
  response.send({ express: "The REGISTRANTS page" });
});

app.get("/Administration", function (request, response) {
  response.send({ express: "The ADMIN page" });
});

mongoose.connect(
  "mongodb+srv://Sofie:P4ssw0rd@Registrants.gnzcn.mongodb.net/Registrants?retryWrites=true&w=majority",

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

app.use("/fetchroutes", Router);

app.listen(10001, function () {
  console.log("Started application on port %d", 10001);
  // shows in terminal
});
