const mongoose = require("mongoose");

var newSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Age: {
    type: String,
  },
  Id: {
    type: String,
  },
});

mongoose.model("Details", newSchema);
