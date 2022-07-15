const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: __dirname + `\\${process.env.NODE_ENV}.env`,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  USERNAME: process.env.CLIENTNAME,
  PASSWORD: process.env.PASSWORD,
  PORT: process.env.PORT
};
