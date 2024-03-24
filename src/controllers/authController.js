const User = require("../models/userSchema");
const UserType = require("../models/userTypeSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });
const JWT_SECRET = process.env.JWT_SECRET;

const signup = async (req, res) => {
  try {
    const userData = req.body;
    const hashedPassword = await hashPassword(userData.password);
    const user = new User({
      ...userData,
      password: hashedPassword,
    });
    let createdUser = await user.save();
    createdUser = JSON.parse(JSON.stringify(createdUser));
    createdUser.password = undefined;
    delete createdUser.password;
    const body = {
      id: createdUser.id,
      role: createdUser.type,
    };
    createdUser.token = jwt.sign({ user: body }, JWT_SECRET);

    return res.status(200).json({
      message: "New User Added Successfully",
      data: createdUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const addUserType = async (req, res) => {
  try {
    const typeData = req.body;
    const userType = new UserType({
      ...typeData,
    });
    const createdUserType = await userType.save();
    return res.status(200).json({
      message: "New User Type Added Successfully",
      data: createdUserType,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

//Create a passport middleware to handle User login
const login = async (req, res) => {
  const userData = req.body;
  try {
    let user = await User.findOne({ phoneNumber: userData.phoneNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validate = await isValidPassword(user, userData.password);

    if (!validate) {
      return res
        .status(400)
        .json({ message: "User is not authenticated with wrong credentials" });
    }
    user = JSON.parse(JSON.stringify(user));
    user.password = undefined;
    delete user.password;

    const body = {
      id: user.id,
      role: user.type,
    };
    user.token = jwt.sign({ user: body }, JWT_SECRET);

    return res.status(200).json({
      message: "User is logged in Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  } catch (error) {
    throw error;
  }
};

const isValidPassword = async (user, password) => {
  try {
    const compare = await bcrypt.compare(password, user.Password);
    return compare;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  signup,
  login,
  addUserType,
};
