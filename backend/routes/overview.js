const express = require("express");
const router = express.Router();
const authenticateToken = require("../src/verifyAuth");
const db = require("../src/db");

router.get("/verify-auth", authenticateToken, (req, res) => {
  try {
    // If authenticateToken middleware passes, user is authenticated
    res.status(200).json({ 
      isAuthenticated: true,
      user: req.user // includes email and other user info
    });
  } catch (err) {
    res.status(401).json({ 
      isAuthenticated: false,
      message: "Invalid or expired token" 
    });
  }
});

router.post("/", authenticateToken, (req, res) => {
  try {
    res.status(200).send("overview");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/enquiry", authenticateToken, (req, res) => {
  const {
    customer_code,
    customer_name,
    service_request,
    mode,
    origin_port,
    delivery_port,
    no_of_packages,
    weight,
    dimensions,
    commodity,
    terms_of_shipment,
    invoice_no,
    invoice_value,
    service_request2,
    currency,
  } = req.body;

  const sql = `
      INSERT INTO Enquiries (
          customer_code,
          customer_name,
          service_request,
          mode,
          origin_port,
          delivery_port,
          no_of_packages,
          weight,
          dimensions,
          commodity,
          terms_of_shipment,
          invoice_no,
          invoice_value,
          service_request2,
          currency
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?)`;

  const values = [
    customer_code,
    customer_name,
    service_request,
    mode,
    origin_port,
    delivery_port,
    no_of_packages,
    weight,
    dimensions,
    commodity,
    terms_of_shipment,
    invoice_no,
    invoice_value,
    service_request2,
    currency,
  ];
  const querys = `SELECT * from users where email = ?`;
  db.query(querys, [req.user.userEmail], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).json({ error: "Failed to save enquiry data." });
    } else {
      res.status(200).json({ message: "Enquiry data saved successfully!" });
    }
  });
});

module.exports = router;
