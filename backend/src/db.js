const { createPool } = require("mysql2");

const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: "12345",
  database: "test",
});

db.getConnection((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database.");
  }
});

module.exports = db;