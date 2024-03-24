const mongoose = require("mongoose");

const UserTypeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

const UserType = mongoose.model("userTypes", UserTypeSchema);

module.exports = UserType;
