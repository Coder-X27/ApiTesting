const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserModel = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  email: {
    type: String
  },
  date:{
    type:Date,
    default:Date.now()
  },
});

module.exports = mongoose.model("user", UserModel);