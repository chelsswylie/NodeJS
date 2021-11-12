const express = require("express");
const router = express.Router();
const userModel = require("../models/fetchmodels");
const app = express();
var controller = require("../controllers/fetchcontroller");

router.get("/Administration", controller.registrant_list);
router.post("/Registration", controller.create_registration);

// route to home page
app.all("/Home", function (request, response) {
  response.send({ express: "Hey this works" });
});

// this function posts to the db
app.post("/Registration", async (request, response) => {
  const user = new commonModel(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
// app.all("/Registration", function (request, response) {
//   console.log(request, "request");

// const parsedObject = commonModel.schema.obj

//   db.collection("users").insertOne({
//     first_name: this.commonModel,
//     // JSON.stringify(commonModel.schema.obj.first_name),
//     // last_name: JSON.stringify(commonModel.schema.obj.last_name),
//     // address_one: JSON.stringify(commonModel.schema.obj.address_one),
//     // address_two: JSON.stringify(commonModel.schema.obj.address_two),
//     // city: JSON.stringify(commonModel.schema.obj.city),
//     // state: JSON.stringify(commonModel.schema.obj.state),
//     // zip: JSON.stringify(commonModel.schema.obj.zip),
//   }),
//     function (error, result) {
//       if (error) {
//         return response.status(500).send(error);
//       }
//       console.log(result, "thee result");
//       response.send(result);
//     };
//   // console.log("the result", result);
// });

app.all("/Administration", (request, response) => {
  const users = commonModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
  // response.send({
  //   // result
  //   firstname: "Jimi",
  //   lastname: "Hendrix",
  //   addressOne: "213 Rock",
  //   addressTwo: "PO BOX 616",
  //   City: "Chicago",
  //   State: "IL",
  //   ZIP: "45678",
  // });
});

// router.route("/").get((req, res) => {
//   userModel
//     .find()
//     .then((users) => res.json(users))
//     .catch((err) => res.status(400).json("Error: " + err));
// });

// router.route("/newregistrants").post((req, res) => {
//   const username = req.body.username;

//   const newUser = new userModel({ username });

//   newUser
//     .save()
//     .then(() => res.json("User added!"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
module.exports = router;
