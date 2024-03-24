//configure database
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.Promise = global.Promise;
const dbName = process.env.DB_NAME;

mongoose
  .connect(`mongodb://127.0.0.1:27017/${dbName}`)

  .then(() => console.log("Database is connected successfully"))

  .catch((error) => console.log(error));

module.exports = mongoose;
