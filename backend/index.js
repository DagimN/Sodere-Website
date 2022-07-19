const config = require("./config");
const crypto = require("crypto");
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const cors = require("cors");
const publicDirectory = path.join(__dirname, "/public");
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${config.USERNAME}:${config.PASSWORD}@soderecluster.qn7ge.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri);
let bookingsDBCollection, qaMessagesDBCollection;

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
app.listen(
  config.PORT,
  config.NODE_ENV === "development" ? initialCallback : null
);

mongoClient.connect().then(async () => {
  let db = mongoClient.db("sodere");
  bookingsDBCollection = db.collection("bookings");
  qaMessagesDBCollection = db.collection("qa_messages");
  console.log("Connected successfully to server");
});

function decrypt(text) {
  var decipher = crypto.createDecipheriv("aes-256-cbc", config.SECRET, config.IV);
  var decrypted = decipher.update(text, "hex", "utf8");

  decrypted += decipher.final("utf8");

  return decrypted;
}


function encrypt(text) {
  var cipher = crypto.createCipheriv("aes-256-cbc", config.SECRET, config.IV);
  var crypted = cipher.update(text, "utf8", "hex");

  crypted += cipher.final("hex");

  return crypted;
}

function hashString(text) {
  var sha = crypto.createHash("sha512");
  sha.update(text);

  return sha.digest("hex");
}

//TODO: Send all required assets (i.e. images, json, etc) to front page of the client app
app.get("/", (req, res) => {
  res.send({ text: "Hello world" });
});

app.post("/book", async (req, res) => {
  let { name, email, phone, type, rooms, other } = req.body;
  let booking = {
    name: name,
    email: encrypt(email),
    phone_number: encrypt(phone),
    room_type: type,
    num_rooms: rooms,
    additional: other,
  };

  try {
    await bookingsDBCollection.insertOne(booking);
  } catch (error) {
    res.status(400).send(error);
  } finally {
    res.sendStatus(200);
  }
});

app.post("/qa", async (req, res) => {
  let { name, email, message } = req.body;
  let qaMessage = { name: name, email: encrypt(email), message: message };

  try {
    await qaMessagesDBCollection.insertOne(qaMessage);
  } catch (error) {
    res.status(400).send(error);
  } finally {
    res.sendStatus(200);
  }
});
