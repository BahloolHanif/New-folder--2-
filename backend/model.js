const mongoose = require ("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true

  },
});
module.exports = mongoose.model("benative_user", UserSchema);
