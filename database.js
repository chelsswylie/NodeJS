const express = require("express");
var app = express();
var mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;
const Router = require("./routes/fetchroutes");
var url = "mongodb://localhost/Registrants";

app.use(express.json());

app.get("/", function (request, response) {
  response.send("Hey this works");
});

app.get("/Registrants", function (request, response) {
  response.send("The REGISTRANTS page");
});

app.get("/Administration", function (request, response) {
  response.send("The ADMIN page");
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

app.use(Router);

app.listen(10001, function () {
  console.log("Started application on port %d", 10001);
  // shows in terminal
});
