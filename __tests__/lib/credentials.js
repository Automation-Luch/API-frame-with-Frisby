const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  BASE_API: process.env.BASE_API,
  INVESTOR_URL: process.env.INVESTOR_URL,
  COMPANY_URL: process.env.COMPANY_URL,
  COMPANY_EMAIL: process.env.COMPANY_EMAIL,
  PASSWORD: process.env.PASSWORD,
};
