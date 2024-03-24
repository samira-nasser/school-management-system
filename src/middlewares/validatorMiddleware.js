var validator = require("validator");

exports.checkEmailValidation = (req, res, next) => {
  let email = req.body.adminEmail || "";
  if (validator.isEmpty(email)) {
    return res.status(500).json({
      message: "Validation error: Email is required !",
    });
  } else {
    if (!validator.isEmail(email)) {
      return res.status(500).json({
        message: "Validation error: Please Enter Valid Email !",
      });
    } else next();
  }
};

exports.checkEmptyPhone = (req, res, next) => {
  let phone = req.body.phoneNumber || "";
  if (validator.isEmpty(phone)) {
    return res.status(500).json({
      message: "Validation error: Please Enter valid Phone !",
    });
  } else next();
};
