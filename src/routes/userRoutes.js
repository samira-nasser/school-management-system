const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validatorMiddleware = require("../middlewares/validatorMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.post(
  "/signup",
  validatorMiddleware.checkEmptyPhone,
  authController.signup
);
router.post(
  "/type",
  authMiddleware.isAuthenticated,
  authController.addUserType
);
router.post(
  "/login",
  validatorMiddleware.checkEmptyPhone,
  authController.login
);

module.exports = router;
