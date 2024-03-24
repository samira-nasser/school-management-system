var express = require("express");
var router = express.Router();
const classroomController = require("../controllers/classroomController");

router.post("/", classroomController.addClassroom);
router.get("/:id", classroomController.getClassroomDetail);
router.delete("/:id", classroomController.deleteClassroom);
router.put("/:id", classroomController.updateClassroom);

module.exports = router;
