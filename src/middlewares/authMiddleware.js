// usually: "Authorization: "token: [token]"
const UserType = require("../models/userTypeSchema");
require("dotenv").config();
require("dotenv").config({ path: __dirname + "/.env" });
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

exports.isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "Missing Authorization Header!" });
  }
  next();
};

exports.isSuperAdminAuthorized = async (req, res, next) => {
  const token = req.headers.authorization;
  const decodedClaims = jwt.verify(token, JWT_SECRET);
  const roleId = decodedClaims.user.role;
  try {
    if (!roleId) {
      return res
        .status(403)
        .json({ error: "Authorization Error: Invalid token !" });
    }
    const role = await UserType.findById(roleId);
    if (role.type != "superAdmin") {
      return res
        .status(403)
        .json({ error: "Authorization Error: User is unauthorized !" });
    }
  } catch (error) {
    return res
      .status(403)
      .json({ error: "Error while decoding token, Wrong token!" });
  }
  next();
};
