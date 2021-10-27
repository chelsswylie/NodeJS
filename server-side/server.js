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
  const json = commonModel.schema.obj;
  const jsonObj = JSON.stringify(json);
  console.log(jsonObj, "commenModel");
  // this shows in terminal
  // db.close();
});
// console.log("This is the db", db);
// this function posts to the db
app.all("/Registration", function (request, response) {
  console.log(request, "request");
  // const parsedObject = commonModel.schema.obj
  db.collection("users").insertOne({
    first_name: JSON.stringify(commonModel.schema.obj.first_name),
    last_name: JSON.stringify(commonModel.schema.obj.last_name),
    address_one: JSON.stringify(commonModel.schema.obj.address_one),
    address_two: JSON.stringify(commonModel.schema.obj.address_two),
    city: JSON.stringify(commonModel.schema.obj.city),
    state: JSON.stringify(commonModel.schema.obj.state),
    zip: JSON.stringify(commonModel.schema.obj.zip),
  }),
    function (error, result) {
      if (error) {
        return response.status(500).send(error);
      }
      console.log(result, "thee result");
      response.send(result);
    };
  // console.log("the result", result);
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
