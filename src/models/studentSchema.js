const mongoose = require("mongoose");

//creating the Schema that enforce constraints on our database

const StudentSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      minlength: 3,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classrooms",
      required: true,
    },

    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "schools",
      required: true,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;
