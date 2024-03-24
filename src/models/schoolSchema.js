const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: String,

      unique: true,

      required: true,

      trim: true,

      minlength: 3,
    },
    adminName: {
      type: String,

      required: true,

      trim: true,

      minlength: 3,
    },
    adminEmail: {
      type: String,

      required: true,

      trim: true,
    },
  },
  { timestamps: true }
);

const School = mongoose.model("schools", SchoolSchema);

module.exports = School;
