const express = require("express");
var app = express();
var mongoose = require("mongoose");
// var mongodbConfig = require("../../config/mongodb/mongodb-config").mongodb;
const Router = require("./routes");

app.use(express.json());

app.get("/", function (request, response) {
  response.send("Hello World!");
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
});

app.use(Router);

app.listen(10001, function () {
  console.log("Started application on port %d", 10001);
});
