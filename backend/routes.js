const config = require('./config');
const mysql = require('mysql2/promise');
const { encrypt } = require('./utils/securityFunctions');

module.exports = async (app) => {
  var connection = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  });
  var db = await connection.getConnection();

  //TODO: Send all required assets (i.e. images, json, etc) to front page of the client app
  app.get("/api", (req, res) => {
    res.sendStatus(200);
  });

  app.get("/api/reviews", (req, res) => {
    let reviewQuery = "SELECT * FROM comment";

    try{
      new Promise(async (resolve, reject) => {
        let [result] = await db.query(reviewQuery);
        let json = JSON.stringify(result);
        resolve(json);
      }).then((json) => {
        res.status(200).send(json);
      }).catch((error)=>{
        console.log(error);
        res.status(503).send(error)
      })
    }
    catch(error){
      console.log(error)
      res.status(503).send(error);
    }
  })

  app.post("/api/book/", async (req, res) => {
    let { name, email, phone, type, rooms, other } = req.body;
    let insertQuery = "INSERT INTO booking(name, phone, email, room_type, num_room, additional) " + 
                    "VALUES (?, ?, ?, ?, ?, ?)";

    try {
      new Promise(async (resolve, reject) => {
        await db.beginTransaction();
        await db.query(insertQuery, [name, encrypt(phone), encrypt(email), type, rooms, other]);

        resolve()
      })
      .then(async ()=>{
        await db.commit();
        res.sendStatus(200);
      }).catch(async (error) => {
        await db.rollback();
        res.status(400).send(error);
      });
    } catch (error) {
        await db.rollback();
      res.status(400).send(error);
    }
  });

  app.post("/api/qa/", async (req, res) => {
    let { name, email, message } = req.body;
    let insertQuery =
      "INSERT INTO comment(name, email, message) " +
      "VALUES (?, ?, ?)";

    try {
      new Promise(async (resolve, reject) => {
        await db.beginTransaction();
        await db.query(insertQuery, [
          name,
          encrypt(email),
          message
        ]);

        resolve()
      }).then(async () => {
        await db.commit();
        res.sendStatus(200);
      }).catch(async (error) => {
        await db.rollback();
        res.status(400).send(error);
      });;
    } catch (error) {
        await db.rollback();
      res.status(400).send(error);
    }
  });
}