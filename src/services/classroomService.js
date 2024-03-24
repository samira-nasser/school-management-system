const Classroom = require("../models/classroomSchema");

const createClassroom = async (classroomData) => {
  try {
    const classroom = new Classroom({
      ...classroomData,
    });
    const newClassroom = await classroom.save();
    return newClassroom;
  } catch (error) {
    throw error;
  }
};

const getClassroom = async (classroomId) => {
  try {
    const classroom = await Classroom.findById(classroomId).populate(
      "school",
      "name"
    );

    return classroom;
  } catch (error) {
    throw error;
  }
};

const deleteClassroom = async (classroomId) => {
  try {
    return await Classroom.findByIdAndDelete(classroomId);
  } catch (error) {
    throw error;
  }
};

const updateClassroom = async (classroomId, classroomData) => {
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      classroomId,
      { $set: classroomData },
      { new: true }
    );
    if (!updatedClassroom) {
      throw "Classroom not found";
    }
    return updatedClassroom;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createClassroom,
  getClassroom,
  deleteClassroom,
  updateClassroom,
};
