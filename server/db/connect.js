const mongoose = require("mongoose");


// read the config file
// require("dotenv").config();
require("dotenv").config("./.env");

const mongoURI = process.env.MONGO_URI;

// create DB connection
const dbConnection = async () => mongoose.disconnect().then(() => mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}));

module.exports = dbConnection;
