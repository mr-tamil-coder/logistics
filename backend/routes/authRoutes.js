const db = require("../src/db");
const express = require("express");
const { hashPassword, comparePassword } = require("../src/encrypt");
const router = express.Router();
const { generateToken } = require("../src/encrypt");
// Signup API endpoint
router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  // Validate input
  if (!username || !password || !email) {
    return res.status(400).send("All fields are required!");
  }
  try {
    const hashedPwd = await hashPassword(password);
    // Insert user into the database
    const query =
      "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
    db.query(query, [username, hashedPwd, email], (err, result) => {
      if (err) {
        res.status(500).send("Error signup. " + err.sqlMessage);
      } else {
        res.status(201).send("Signup successful!" + result);
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});



//Login API
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send("All fields are required!");
  }
  const query = "SELECT * from users where email = ?";

  db.query(query, [email], async (err, result) => {
    if (err) {
      console.log("Error login user :", err);
      res.status(500).send("Invalid details");
    }
    if (result.length > 0) {
      const user=result[0];
      try {
        const isMatch = await comparePassword(password, user.password);
        if (isMatch) {
          const userId=result[0].id;
          const userEmail=result[0].email;
          console.log("id :"+result[0].id , "email :"+result[0].email);
          const token=generateToken(userId,userEmail);
          console.log("Successful login");
          res.cookie("authToken", token, {
            // httpOnly: true, 
            // secure: process.env.NODE_ENV === "production", // Ensures cookies are sent over HTTPS in production
            // sameSite: "strict", // Prevents CSRF
            maxAge: 24 * 60 * 60 * 1000, // 1 hour
          });
    
          res.status(200).json({ success: true, message: "Login successful!", redirect: "/overview",token });
        } else {
          res.status(401).send("Invalid email or password");
        }
      } catch (err) {
        console.log(result);
        res.status(404).send("Login failed user not found");
      }
    } else {
      res.status(404).send("Invalid details");
    }
  });
});

module.exports = router;
