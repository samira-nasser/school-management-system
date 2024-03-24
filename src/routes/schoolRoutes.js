var express = require("express");
var router = express.Router();
const schoolController = require("../controllers/schoolController");
const validatorMiddleware = require("../middlewares/validatorMiddleware");

router.post(
  "/",
  validatorMiddleware.checkEmailValidation,
  schoolController.addSchool
);
router.get("/:id", schoolController.getSchoolDetail);
router.delete("/:id", schoolController.deleteSchool);
router.put("/:id", schoolController.updateSchool);

module.exports = router;
