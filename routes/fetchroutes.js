const express = require("express");
const userModel = require("../models/fetchmodels");
const app = express();
const router = express.Router();
var controller = require("../controllers/fetchcontroller");

router.get("/fetchInfo", controller.fetchData);

module.exports = router;

// app.post("/add_user", async (request, response) => {
//   const user = new userModel(request.body);

//   try {
//     await user.save();
//     response.send(user);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// app.get("/users", async (request, response) => {
//   const users = await userModel.find({});

//   try {
//     response.send(users);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// module.exports = app;
