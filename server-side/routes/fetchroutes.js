const express = require("express");
const router = express.Router();
const userModel = require("../models/fetchmodels");
const app = express();
var controller = require("../controllers/fetchcontroller");

// router.get("/fetchInfo", controller.fetchData);

router.route("/").get((req, res) => {
  userModel
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/newregistrants").post((req, res) => {
  const username = req.body.username;

  const newUser = new userModel({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
