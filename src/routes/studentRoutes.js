var express = require("express");
var router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/", studentController.addStudent);
router.get("/:id", studentController.getStudentDetail);
router.delete("/:id", studentController.deleteStudent);
router.put("/:id", studentController.updateStudent);

module.exports = router;
