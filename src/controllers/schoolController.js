const schoolService = require("../services/schoolService");

const addSchool = async (req, res) => {
  try {
    const data = req.body;
    const created = await schoolService.createSchool(data);
    if (created) {
      return res.json({
        message: "School is created successfully!",
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getSchoolDetail = async (req, res) => {
  try {
    const schoolId = req.params.id;

    const school = await schoolService.getSchool(schoolId);
    if (school) {
      return res.json({
        message: "School is retrieved successfully!",
        data: school,
      });
    } else {
      res.send({ message: "School is not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    await schoolService.deleteSchool(schoolId);
    return res.json({
      message: "School is deleted successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateSchool = async (req, res) => {
  try {
    const schoolId = req.params.id;
    const schoolData = req.body;

    await schoolService.updateSchool(schoolId, schoolData);
    return res.json({
      message: "School data is updated successfully!",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  addSchool,
  getSchoolDetail,
  deleteSchool,
  updateSchool,
};
