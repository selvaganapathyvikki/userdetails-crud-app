const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const detailsModel = mongoose.model("Details");

router.get("/add", (req, res) => {
  res.render("add-users");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  var userDetail = new detailsModel();
  userDetail.Name = req.body.Name;
  userDetail.Age = req.body.Age;
  userDetail.Id = req.body.Id;
  userDetail.save((err, docs) => {
    if (!err) {
      res.redirect("/details/user");
    } else {
      res.send("Error occured");
    }
  });
  //res.redirect("/details/user");
});

router.get("/user", (req, res) => {
  detailsModel
    .find({})
    .lean()
    // execute query
    .exec(function (error, docs) {
      res.render("list", { data: docs });
    });
});

module.exports = router;
