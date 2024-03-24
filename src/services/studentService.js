const Student = require("../models/studentSchema");

const createStudent = async (studentData) => {
  try {
    const student = new Student({
      ...studentData,
    });
    return await student.save();
  } catch (error) {
    throw error;
  }
};

const getStudent = async (studentId) => {
  try {
    const student = await Student.findById(studentId)
      .populate("school", "name")
      .populate("class", "name");

    return student;
  } catch (error) {
    throw error;
  }
};

const deleteStudent = async (studentId) => {
  return await Student.findByIdAndDelete(studentId);
};

const updateStudent = async (studentId, studentData) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $set: studentData },
      { new: true }
    );
    if (!updatedStudent) {
      throw "Student not found";
    }
    return updatedStudent;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent,
};
