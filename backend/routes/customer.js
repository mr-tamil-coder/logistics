const express = require("express");
const router = express.Router();
const authenticateToken = require("../src/verifyAuth");
const db = require("../src/db");
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.post("/customer", authenticateToken, upload.fields([
  { name: 'pan', maxCount: 1 },
  { name: 'tan', maxCount: 1 },
  { name: 'aadhaar', maxCount: 1 },
  { name: 'telephone', maxCount: 1 },
  { name: 'bankCheque', maxCount: 1 },
  { name: 'creditForm', maxCount: 1 },
  { name: 'incorporation', maxCount: 1 },
  { name: 'gstForm', maxCount: 1 }
]), (req, res) => {
  const {
    customer_code,
    customer_name,
    contact_person_name,
    address,
    phone_number,
    mail_id,
    lkc_sales_person,
    visit_date,
    follow_up_date,
    customer_requirements,
    feedback
  } = req.body;

  const files = req.files;

  const sql = `
    INSERT INTO customers (
      customer_code, customer_name, contact_person_name, address, phone_number,
      mail_id, lkc_sales_person, visit_date, follow_up_date, customer_requirements,
      feedback, pan, tan, aadhaar, telephone, bankCheque, creditForm, incorporation, gstForm
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    customer_code, customer_name, contact_person_name, address, phone_number,
    mail_id, lkc_sales_person, visit_date, follow_up_date, customer_requirements,
    feedback, files.pan ? files.pan[0].filename : null, files.tan ? files.tan[0].filename : null,
    files.aadhaar ? files.aadhaar[0].filename : null, files.telephone ? files.telephone[0].filename : null,
    files.bankCheque ? files.bankCheque[0].filename : null, files.creditForm ? files.creditForm[0].filename : null,
    files.incorporation ? files.incorporation[0].filename : null, files.gstForm ? files.gstForm[0].filename : null
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting customer data: ", err);
      res.status(500).json({ error: "Failed to save customer data" });
    } else {
      res.status(200).json({ message: "Customer data saved successfully!" });
    }
  });
});

module.exports = router;
