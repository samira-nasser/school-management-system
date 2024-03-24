//configure database
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.Promise = global.Promise;

const dbName = process.env.DB_NAME;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;
const databaseURL = `${dbHost}:${dbPort}/${dbName}`;
mongoose
  .connect(databaseURL)

  .then(() => console.log("Database is connected successfully"))

  .catch((error) => {
    throw error;
  });

module.exports = mongoose;
