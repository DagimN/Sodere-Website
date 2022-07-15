const config = require('./config');
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const publicDirectory = path.join(__dirname, "/public");
const { MongoClient } = require("mongodb");

let initialCallback = (error) => {
  if (error) {
    throw error;
  }

  console.log("Listening to port " + config.PORT);
}

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
app.listen(config.PORT, (config.NODE_ENV === 'development') ? initialCallback : null);

const uri = `mongodb+srv://${config.USERNAME}:${config.PASSWORD}@soderecluster.qn7ge.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri);
let bookingsDBCollection, qaMessagesDBCollection;

mongoClient
  .connect()
  .then(async () => {
    let db = mongoClient.db("sodere");
    bookingsDBCollection = db.collection("bookings");
    qaMessagesDBCollection = db.collection("qa_messages");
    console.log("Connected successfully to server");
    
  });
let projectRoot = __dirname.substring(0, __dirname.lastIndexOf("\\"));

app.get("/", (req, res) => {
  res.send({ text: "Hello world" });
});

app.post("/book", (req, res) => {
  let {name, email, phone, type, rooms, other} = req.body;
  let booking = {name: name, email: email, phone_number: phone, room_type: type, num_rooms: rooms, additional: other}

  bookingsDBCollection.insertOne(booking);

  res.end();
});

app.post("/qa", async (req, res) => {
  let {name, email, message} = req.body;
  let qaMessage = {name: name, email: email, message: message}

  await qaMessagesDBCollection.insertOne(qaMessage);

  res.sendStatus(200);
});
