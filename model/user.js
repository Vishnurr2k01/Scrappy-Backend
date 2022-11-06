const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const User = new Schema({
  email: String,

  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
  },
  address: String,
  phone: String,
  userrole:String

});

const UserSchema = mongoose.model("User", User);
module.exports = UserSchema;
