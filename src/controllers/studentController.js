const studentService = require("../services/studentService.js");

const addStudent = async (req, res) => {
  try {
    const data = req.body;
    const created = await studentService.createStudent(data);
    if (created) {
      return res.json({
        message: "Student is created successfully!",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getStudentDetail = async (req, res) => {
  try {
    const studentId = req.params.id;

    const student = await studentService.getStudent(studentId);
    if (student) {
      return res.json({
        message: "Student is retrieved successfully!",
        data: student,
      });
    } else {
      res.send({ message: "No student found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    await studentService.deleteStudent(studentId);

    return res.json({
      message: "Student is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(err);
  }
};

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const studentData = req.body;

    await studentService.updateStudent(studentId, studentData);
    return res.json({
      message: "Student data is updated successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addStudent,
  getStudentDetail,
  deleteStudent,
  updateStudent,
};
