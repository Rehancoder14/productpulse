const mongoose = require("mongoose");
const uuid = require("uuid");

const userSchema = mongoose.Schema(
  {
    userId: {
      required: true,
      type: String,
      default: uuid.v4(),
    },
    username: {
      type: String,
      required: [true, "Please add the user name"],
    },
    password: {
      type: String,
      required: [true, "Please add the password"],
    },
    email: {
      type: String,
      required: [true, "Please add the email"],
      unique: [true, "Email already exists"],
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
