var express = require("express");
var router = express.Router();
const schoolController = require("../controllers/schoolController");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/",
  authMiddleware.isSuperAdminAuthorized,
  validatorMiddleware.checkEmailValidation,
  schoolController.addSchool
);
router.get("/:id", schoolController.getSchoolDetail);
router.delete(
  "/:id",
  authMiddleware.isSuperAdminAuthorized,
  schoolController.deleteSchool
);
router.put(
  "/:id",
  authMiddleware.isSuperAdminAuthorized,
  schoolController.updateSchool
);

module.exports = router;
