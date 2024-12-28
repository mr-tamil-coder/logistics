const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../src/db");

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
    db.query(sql, [email, hashedPassword], (err, result) => {
      if (err) {
        console.error("Error inserting user data: ", err);
        res.status(500).json({ error: "Failed to signup user" });
      } else {
        res.status(200).json({ message: "Signup successful!" });
      }
    });
  } catch (error) {
    console.error("Signup error: ", error);
    res.status(500).json({ error: "An error occurred. Please try again." });
  }
});

module.exports = router;
