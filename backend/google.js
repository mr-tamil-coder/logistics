const express = require("express");
const { createPool } = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const { OAuth2Client } = require("google-auth-library");

const app = express();

// Enable CORS for cross-origin requests
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Google OAuth Client ID
const client = new OAuth2Client("139241175378-bja01i0fg7dpv9q77rk0qod54cu7ikhc.apps.googleusercontent.com");

// MySQL database connection pool
const pool = createPool({
  host: "localhost", // Your MySQL host
  user: "root", // Your MySQL username
  password: "zyx963", // Your MySQL password
  database: "logistics", // Your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to verify the Google token and get the user info
const verifyToken = async (tokenId) => {
  const ticket = await client.verifyIdToken({
    idToken: tokenId,
    audience: "139241175378-bja01i0fg7dpv9q77rk0qod54cu7ikhc.apps.googleusercontent.com",  // Replace with your actual client ID
  });
  const payload = ticket.getPayload();
  return payload;
};

// Endpoint to handle Google login
app.post("/api/auth/google-login", async (req, res) => {
  const { credential } = req.body; // The Google token received from the frontend
  
  try {
    // Verify the Google token and extract user details
    const userPayload = await verifyToken(credential);
    const { email, name, picture, sub: googleId } = userPayload;

    // Check if the user already exists in the database
    pool.execute("SELECT * FROM users WHERE google_id = ?", [googleId], (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ error: "Database error" });
      }

      // If user exists, log them in
      if (results.length > 0) {
        const existingUser = results[0];
        return res.status(200).json({
          user: {
            googleId: existingUser.google_id,
            name: existingUser.name,
            email: existingUser.email,
            picture: existingUser.picture,
          },
          message: "User logged in",
        });
      } else {
        // If user doesn't exist, create a new user
        pool.execute(
          "INSERT INTO users (google_id, name, email, picture) VALUES (?, ?, ?, ?)",
          [googleId, name, email, picture],
          (err, result) => {
            if (err) {
              console.error("Error inserting new user:", err);
              return res.status(500).json({ error: "Error inserting new user" });
            }

            const newUser = {
              googleId,
              name,
              email,
              picture,
            };
            return res.status(200).json({ user: newUser, message: "User signed up" });
          }
        );
      }
    });
  } catch (error) {
    console.error("Authentication failed:", error);
    return res.status(500).json({ error: "Authentication failed" });
  }
});

// Start the Express server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
