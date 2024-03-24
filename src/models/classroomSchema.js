const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    grade: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    numberOfStudents: {
      type: Number,
      required: true,
      trim: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "schools",
      required: true,
    },
  },
  { timestamps: true }
);

const Classroom = mongoose.model("classrooms", ClassroomSchema);

module.exports = Classroom;
