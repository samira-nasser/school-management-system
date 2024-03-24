const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },

    type: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userTypes",
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
