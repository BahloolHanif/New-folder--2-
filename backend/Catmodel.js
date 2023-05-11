const mongoose = require ("mongoose");
const UserSchema = mongoose.Schema({
  category: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  }

});
module.exports = mongoose.model("category", UserSchema);
     