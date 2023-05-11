const mongoose = require("mongoose");
const userdata = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("benative_account", userdata);
