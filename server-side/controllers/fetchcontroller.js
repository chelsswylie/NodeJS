const userModel = require("../models/fetchmodels");

// GET
exports.registrant_list = function (req, res) {
  async.parallel(
    {
      registrants_count: function (callback) {
        Users.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
    },
    function (err, results) {
      res.render("index", {
        title: "info goes here",
        error: err,
        data: results,
      });
    }
  );
};

// POST
exports.create_registration = function (req, res, next) {
  userModel
    .find()
    .sort([["last_name", "ascending"]])
    .exec(function (err, list_registrants) {
      if (Err) {
        return next(err);
      }
      res.render("create_registrants", {
        title: "Registrants",
        create_registration: list_registrants,
      });
    });
  // res.send("NOT IMPLEMENTED YET: create registrant list");
};
// module.exports = {
//   fetchData: function (req, res) {
//     userModel.fetchData(function (data) {
//       res.render("Registrants", { userData: data });
//     });
//   },
// };

// this file might not really be doing anything
