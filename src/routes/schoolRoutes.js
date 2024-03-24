var express = require("express");
var router = express.Router();
const schoolController = require("../controllers/schoolController");

router.post("/", schoolController.addSchool);
router.get("/:id", schoolController.getSchoolDetail);
router.delete("/:id", schoolController.deleteSchool);
router.put("/:id", schoolController.updateSchool);

module.exports = router;
