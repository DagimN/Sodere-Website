const mysql = require("mysql2/promise");
const config = require('./config');

const createCommentQuery =
  "CREATE TABLE IF NOT EXISTS comment( " +
  "commentid int(11) AUTO_INCREMENT PRIMARY KEY, " +
  "name varchar(200) NOT NULL, " +
  "email varchar(200) NULL, " +
  "message text NOT NULL);"
const createBookingQuery =
  "CREATE TABLE IF NOT EXISTS booking( " +
  "bookingid int(11) AUTO_INCREMENT PRIMARY KEY, " +
  "name varchar(200) NOT NULL, " +
  "phone varchar(1000) NOT NULL, " +
  "email varchar(500) NOT NULL, " +
  "room_type varchar(500) NOT NULL, " +
  "num_room int(11) NOT NULL, " + 
  "additional text NULL);";

var db;

var connectToDatabase = async () => {
  db = await mysql
    .createPool({
      host: config.HOST,
      user: config.USER,
      password: config.PASSWORD,
      database: config.DATABASE,
      port: config.PORT
    })
    .getConnection();

  try {
    await createDatabase().catch((reject) => {
      throw reject;
    });
    await useDatabase().catch((reject) => {
      throw reject;
    });
    await createBookingTable().catch((reject) => {
      throw reject;
    });
    await createCommentTable().catch((reject) => {
      throw reject;
    });

    await db.commit();
  } catch (error) {
    console.log("Error Occurred: " + error);
    await db.rollback();
    db.query("DROP DATABASE " + config.DATABASE);
  } finally {
    db.release();
  }
};

var createDatabase = async (promiseConnection) => {
  return await new Promise(async (resolve, reject) => {
    try {
      await db.query("CREATE DATABASE IF NOT EXISTS " + config.DATABASE);
      resolve(true);
    } catch (error) {
      await db.rollback();
      reject(error);
    }
  });
};

var useDatabase = async () => {
  return await new Promise(async (resolve, reject) => {
    try {
      await db.query("USE " + config.DATABASE).catch((error) => {
        throw error;
      });
      resolve(true);
    } catch (error) {
      reject(error);
    }
  });
};

var createBookingTable = async () => {
  return await new Promise((resolve, reject) => {
    try {
      db.query(createBookingQuery);
      resolve();
    } catch (error) {
      db.rollback();
      reject(error);
    }
  });
};

var createCommentTable = async () => {
  return await new Promise((resolve, reject) => {
    try {
      db.query(createCommentQuery);
      resolve();
    } catch (error) {
      db.rollback();
      reject(error);
    }
  });
};

module.exports = {connectToDatabase, db}