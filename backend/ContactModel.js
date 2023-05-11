const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  subject: {
    required: true,
    type: String,
  },
  message: {
    required: true,
    type: String,
  },
});
module.exports = mongoose.model("contact", UserSchema);
