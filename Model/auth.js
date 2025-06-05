const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  _id: {
    type: String,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("UsersDB", authSchema);
