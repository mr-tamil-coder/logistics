const express = require("express");
const {createPool} = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const cors=require("cors")
app.use(cors())
app.use(bodyParser.json());
// MySQL connection
const db = createPool({
  host: "localhost",
  user: "root",
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

// Signup API endpoint
app.post("/signup", (req, res) => {
    console.log("entered")
  const { username, password, email } = req.body;

  // Validate input
  if (!username || !password || !email) {
    return res.status(400).send("All fields are required!" );
  }

  // Insert user into the database
  const query = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
  db.query(query, [username, password, email], (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      res.status(500).send("Error signing up. Please try again." );
    } else {
        console.log("success");
        
      res.status(201).send( "Signup successful!" );
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
