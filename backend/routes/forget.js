const express = require("express");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const db = require("../src/db"); // Your database connection file
const router = express.Router();



// Generate OTP and send email
router.post("/generate-otp", async (req, res) => {
  const { email } = req.body;
  const otp = crypto.randomInt(100000, 999999).toString();

  try {
    // Check if email exists
    const [user] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0) {
      return res.status(404).json({ error: "Email not found" });
    }

    // Save OTP in database
    const expiry = new Date(Date.now() + 10 * 60000); // 10 minutes expiry
    await db
      .promise()
      .query("UPDATE users SET otp = ?, otp_expiry = ? WHERE email = ?", [
        otp,
        expiry,
        email,
      ]);

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: email,
      subject: "Your OTP for Password Reset",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate OTP" });
  }
});

// Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const [user] = await db
      .promise()
      .query("SELECT * FROM users WHERE email = ?", [email]);
    if (user.length === 0 || user[0].otp !== otp) {
      return res.status(400).json({ error: "Invalid OTP" });
    }

    const isExpired = new Date(user[0].otp_expiry) < new Date();
    if (isExpired) {
      return res.status(400).json({ error: "OTP has expired" });
    }

    res.json({ message: "OTP verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OTP verification failed" });
  }
});

// Reset Password
router.post("/reset-password", async (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db
      .promise()
      .query(
        "UPDATE users SET password = ?, otp = NULL, otp_expiry = NULL WHERE email = ?",
        [hashedPassword, email]
      );

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to reset password" });
  }
});

module.exports = router;
