const path = require("path");

if(process.env.NODE_ENV === 'development'){
  const dotenv = require("dotenv");
  dotenv.config({
    path: __dirname + `\\${process.env.NODE_ENV}.env`,
  });
}
  

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  HOST: process.env.HOST, 
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  SECRET: process.env.SECRET,
  IV: process.env.IV,
  DATABASE: process.env.DATABASE
};
