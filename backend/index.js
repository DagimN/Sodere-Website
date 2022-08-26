const config = require("./config");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const publicDirectory = path.join(__dirname, "/public");
const dbconfig = require("./database_config.js");

let initialCallback = (error) => {
  if (error) throw error;

  console.log("Listening to port " + config.PORT);
};

app.use(express.static(publicDirectory));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  if (!req.user) {
    res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Expires", "-1");
    res.header("Pragma", "no-cache");
  }
  next();
});

app.use(cors());
app.use(cookieParser());
app.listen(5001);

dbconfig.connectToDatabase();

const routes = require('./routes')(app);