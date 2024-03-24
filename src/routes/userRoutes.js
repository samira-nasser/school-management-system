const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const validatorMiddleware = require("../middlewares/validatorMiddleware");

router.post(
  "/signup",
  validatorMiddleware.checkEmptyPhone,
  authController.signup
);
router.post("/type", authController.addUserType);
router.post(
  "/login",
  validatorMiddleware.checkEmptyPhone,
  authController.login
);

module.exports = router;
