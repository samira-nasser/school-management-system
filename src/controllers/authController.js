const jwt = require("jsonwebtoken");
require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });
const JWT_SECRET = process.env.JWT_SECRET;
let users = require("../config/config");

//Create a passport middleware to handle user registration
// exports.signup = async (req, res) => {
//   try {
//     let userData = req.body;
//     let user = await UserModel.create(userData);
//     user = JSON.parse(JSON.stringify(user));
//     user.Password = undefined;
//     delete user.Password;
//     const body = { ID: user.ID, Email: user.Email };
//     user.token = jwt.sign({ user: body }, "top_secret");
//     return res.status(200).json({
//       message: "New User Added Successfully",
//       data: user
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.message
//     });
//   }
// };

//Create a passport middleware to handle User login
exports.login = async (req, res) => {
  const Authorization = req.body.Authorization;
  const FingerPrint = req.body.FingerPrint;
  const DeviceToken = req.body.DeviceToken;
  try {
    let userArray = users.filter((user) => {
      return (
        user.authorization == Authorization &&
        user.fingerPrint == FingerPrint &&
        user.deviceToken == DeviceToken
      );
    });
    if (userArray.length > 0) {
      let user = userArray[0];
      user.token = jwt.sign({ user: user }, JWT_SECRET);

      return res.status(200).json({
        message: "User is logged in Successfully",
        data: user,
      });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
