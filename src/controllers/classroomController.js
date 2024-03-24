const classroomService = require("../services/classroomService");

const addClassroom = async (req, res) => {
  try {
    const data = req.body;
    const created = await classroomService.createClassroom(data);
    if (created) {
      return res.json({
        message: "Classroom is created successfully!",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getClassroomDetail = async (req, res) => {
  try {
    const classroomId = req.params.id;

    const classroom = await classroomService.getClassroom(classroomId);
    if (classroom) {
      return res.json({
        message: "Classroom is retrieved successfully!",
        data: classroom,
      });
    } else {
      res.send({ message: "Classroom is not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const classroomId = req.params.id;
    await classroomService.deleteClassroom(classroomId);
    return res.json({
      message: "Classroom is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateClassroom = async (req, res) => {
  try {
    const classroomId = req.params.id;
    const classroomData = req.body;

    await classroomService.updateClassroom(classroomId, classroomData);
    return res.json({
      message: "Classroom data is updated successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addClassroom,
  getClassroomDetail,
  deleteClassroom,
  updateClassroom,
};
