const School = require("../models/schoolSchema");

const createSchool = async (schoolData) => {
  try {
    const school = new School({
      ...schoolData,
    });
    const newSchool = await school.save();
    return newSchool;
  } catch (error) {
    throw error;
  }
};

const getSchool = async (schoolId) => {
  try {
    const school = await School.findById(schoolId);

    return school;
  } catch (error) {
    throw error;
  }
};

const deleteSchool = async (schoolId) => {
  try {
    return await School.findByIdAndDelete(schoolId);
  } catch (error) {
    throw error;
  }
};

const updateSchool = async (schoolId, schoolData) => {
  try {
    const updatedSchool = await School.findByIdAndUpdate(
      schoolId,
      { $set: schoolData },
      { new: true }
    );
    if (!updatedSchool) {
      throw "School not found";
    }
    return updatedSchool;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createSchool,
  getSchool,
  deleteSchool,
  updateSchool,
};
