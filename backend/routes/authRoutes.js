const db = require("../src/db");
const path = require("path");
const multer = require("multer");
const express = require("express");
const fs = require('fs');
const { hashPassword, comparePassword } = require("../src/encrypt");
const router = express.Router();
const { generateToken } = require("../src/encrypt");
// Signup API endpoint
router.post("/signup", async (req, res) => {
  const { username, password, email, role } = req.body;
  // Validate input
  if (!username || !password || !email) {
    return res.status(400).send("All fields are required!");
  }
  try {
    const hashedPwd = await hashPassword(password);
    // Insert user into the database
    const query =
      "INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)";
    db.query(query, [username, hashedPwd, email, role], (err, result) => {
      if (err) {
        console.log("Error signup user :", err);

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
      const user = result[0];
      try {
        const isMatch = await comparePassword(password, user.password);
        if (isMatch) {
          const userId = result[0].id;
          const userEmail = result[0].email;
          console.log("id :" + result[0].id, "email :" + result[0].email);
          const token = generateToken(userId, userEmail);
          console.log("Successful login");
          res.cookie("authToken", token, {
            // httpOnly: true,
            // secure: process.env.NODE_ENV === "production", // Ensures cookies are sent over HTTPS in production
            // sameSite: "strict", // Prevents CSRF
            maxAge: 24 * 60 * 60 * 1000, // 1 hour
          });

          res.status(200).json({
            success: true,
            message: "Login successful!",
            redirect: "/overview",
            token,
          });
        } else {
          res.status(401).send("Invalid password");
        }
      } catch (err) {
        console.log(result);
        res.status(404).send("Login failed user not found");
      }
    } else {
      console.log(err);
      res.status(404).send("Invalid details");
    }
  });
});



// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Create safe filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname.replace(/[^a-zA-Z0-9.]/g, '_')}`);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/msword'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Upload endpoint
router.post("/upload", upload.single("document"), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const { customerId, fileType } = req.body;
    const filePath = req.file.path;

    // Validate inputs
    if (!customerId || !fileType) {
      // Delete uploaded file if validation fails
      fs.unlinkSync(filePath);
      return res.status(400).json({ error: "Customer ID and file type are required" });
    }

    // Insert file record into database
    const query = `
      INSERT INTO files (customer_id, file_type, file_path, original_name, upload_date)
      VALUES (?, ?, ?, ?, NOW())
    `;

    db.query(
      query,
      [customerId, fileType, filePath, req.file.originalname],
      (err, result) => {
        if (err) {
          // Delete uploaded file if database insert fails
          fs.unlinkSync(filePath);
          console.error("Database error:", err);
          return res.status(500).json({ error: "Failed to save file information" });
        }

        res.status(200).json({
          message: "File uploaded successfully",
          fileId: result.insertId,
          filePath: filePath
        });
      }
    );
  } catch (error) {
    console.error("Upload error:", error);
    // Cleanup uploaded file in case of error
    if (req.file?.path) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({ error: "File upload failed" });
  }
});

module.exports = router;