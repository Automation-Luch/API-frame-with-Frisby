const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  BASE_API: process.env.BASE_API,
  INVESTOR_URL: process.env.INVESTOR_URL,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};
