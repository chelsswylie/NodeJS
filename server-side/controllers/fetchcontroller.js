const userModel = require("../models/fetchmodels");

module.exports = {
  fetchData: function (req, res) {
    userModel.fetchData(function (data) {
      res.render("Registrants", { userData: data });
    });
  },
};

// this file might not really be doing anything
