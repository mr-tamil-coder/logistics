const express = require("express");
const router = express.Router();
const authenticateToken = require("../src/verifyAuth");
const db = require("../src/db");

router.post("/sea-info", authenticateToken, (req, res) => {
  const {
    job_no,
    co_loader,
    agent_name,
    mbl_no,
    container_no,
    container_load,
    hbl_no,
    no_of_package,
    gweight,
    cbm,
    dimension,
    commodity,
    shipper_invoice_no,
    amount,
    currency,
    date,
    agent_debit_note,
    agent_debit_date,
    agent_debit_amount,
    agent_debit_currency,
    liner_debit_note,
    liner_debit_date,
    cha,
    cha_date,
    leo_issued,
    egm,
    shipping_invoice_no,
    igm_control_manifest,
    boe_no,
    boe_date,
    terms_of_shipment,
    origin_port,
    destination_port,
    shipping_line,
    vessel_name,
    voyage_no,
    etd,
    eta,
    vessel_berthing_date,
  } = req.body;

  const sql = `
      INSERT INTO sea_info (
        job_no,
        co_loader, 
        agent_name,
        mbl_no,
        container_no,
        container_load,
        hbl_no, 
        no_of_package,
        gweight,
        cbm,
        dimension,
        commodity,
        shipper_invoice_no,
        amount,
        currency, 
        date,
        agent_debit_note,
        agent_debit_date,
        agent_debit_amount,
        agent_debit_currency,
        liner_debit_note,
        liner_debit_date,
        cha,
        cha_date,
        leo_issued,
        egm,
        shipping_invoice_no,
        igm_control_manifest,
        boe_no,
        boe_date,
        terms_of_shipment,
        origin_port,
        destination_port,
        shipping_line,
        vessel_name,
        voyage_no,
        etd,
        eta,
        vessel_berthing_date
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    job_no,
    co_loader,
    agent_name,
    mbl_no,
    container_no,
    container_load,
    hbl_no,
    no_of_package,
    gweight,
    cbm,
    dimension,
    commodity,
    shipper_invoice_no,
    amount,
    currency,
    date,
    agent_debit_note,
    agent_debit_date,
    agent_debit_amount,
    agent_debit_currency,
    liner_debit_note,
    liner_debit_date,
    cha,
    cha_date,
    leo_issued,
    egm,
    shipping_invoice_no,
    igm_control_manifest,
    boe_no,
    boe_date,
    terms_of_shipment,
    origin_port,
    destination_port,
    shipping_line,
    vessel_name,
    voyage_no,
    etd,
    eta,
    vessel_berthing_date,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data: ", err);
      res.status(500).json({ error: "Failed to save sea info data" });
    } else {
      res.status(200).json({ message: "Sea info data saved successfully!" });
    }
  });
});

router.post("/sea-export", authenticateToken, (req, res) => {
  const {
    job_no,
    co_loader,
    mbl_no,
    hbl_no,
    container_no,
    container_load,
    no_of_package,
    weight,
    cbm,
    dimensions,
    commodity,
    terms_of_shipment,
    shipping_line,
    vessel_name,
    eta,
    shipper_invoice_no,
    amount,
    currency,
    cha,
    origin_port,
    delivery_port,
    shipping_bill_no,
    shipping_bill_date,
    do_issued,
    agent_invoice_no,
    agent_invoice_date,
    agent_amount,
    agent_currency,
  } = req.body;

  const sql = `
      INSERT INTO sea_exports (
        job_no, co_loader, mbl_no, hbl_no, container_no,
        container_load, no_of_package, weight, cbm, dimensions,
        commodity, terms_of_shipment, shipping_line, vessel_name,
        eta, shipper_invoice_no, amount, currency, cha,
        origin_port, delivery_port, shipping_bill_no, 
        shipping_bill_date, do_issued, agent_invoice_no,
        agent_invoice_date, agent_amount, agent_currency,
        created_by, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;

  const values = [
    job_no,
    co_loader,
    mbl_no,
    hbl_no,
    container_no,
    container_load,
    no_of_package,
    weight,
    cbm,
    dimensions,
    commodity,
    terms_of_shipment,
    shipping_line,
    vessel_name,
    eta,
    shipper_invoice_no,
    amount,
    currency,
    cha,
    origin_port,
    delivery_port,
    shipping_bill_no,
    shipping_bill_date,
    do_issued,
    agent_invoice_no,
    agent_invoice_date,
    agent_amount,
    agent_currency,
    req.user.userEmail,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting sea export data: ", err);
      res.status(500).json({ error: "Failed to save sea export data" });
    } else {
      res.status(200).json({
        message: "Sea export data saved successfully!",
        id: result.insertId,
      });
    }
  });
});

router.post("/air-import", authenticateToken, (req, res) => {
  const {
    job_no,
    agent_name,
    mawb_no,
    mawb_date,
    hawb_no,
    hawb_date,
    no_of_package,
    gweight,
    chweight,
    dimensions,
    commodity,
    terms_of_shipment,
    origin_port,
    destination_port,
    airlines_name,
    flight_no,
    flight_date,
    etd,
    eta,
    agent_debit_note,
    agent_debit_note_date,
    amount,
    currency,
    airline_debit_note,
    airline_debit_note_date,
    shipper_invoice_no,
    shipper_invoice_date,
    shipper_amount,
    shipper_currency,
    consol_manifest,
    airline_do_issued,
    cha,
    boe_no,
    boe_date,
  } = req.body;

  const sql = `
    INSERT INTO air_imports (
      job_no, agent_name, mawb_no, mawb_date, hawb_no, hawb_date,
      no_of_package, gweight, chweight, dimensions, commodity,
      terms_of_shipment, origin_port, destination_port, airlines_name,
      flight_no, flight_date, etd, eta, agent_debit_note,
      agent_debit_note_date, amount, currency, airline_debit_note,
      airline_debit_note_date, shipper_invoice_no, shipper_invoice_date,
      shipper_amount, shipper_currency, consol_manifest, airline_do_issued,
      cha, boe_no, boe_date, created_by, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;

  const values = [
    job_no,
    agent_name,
    mawb_no,
    mawb_date,
    hawb_no,
    hawb_date,
    no_of_package,
    gweight,
    chweight,
    dimensions,
    commodity,
    terms_of_shipment,
    origin_port,
    destination_port,
    airlines_name,
    flight_no,
    flight_date,
    etd,
    eta,
    agent_debit_note,
    agent_debit_note_date,
    amount,
    currency,
    airline_debit_note,
    airline_debit_note_date,
    shipper_invoice_no,
    shipper_invoice_date,
    shipper_amount,
    shipper_currency,
    consol_manifest,
    airline_do_issued,
    cha,
    boe_no,
    boe_date,
    req.user.userEmail,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting air import data: ", err);
      res.status(500).json({ error: "Failed to save air import data" });
    } else {
      res.status(200).json({
        message: "Air import data saved successfully!",
        id: result.insertId,
      });
    }
  });
});

router.post("/air-export", authenticateToken, (req, res) => {
  const {
    job_no,
    co_loader,
    agent_name,
    shipping_bill_no,
    shipping_bill_date,
    mawb_no,
    mawb_date,
    hawb_no,
    hawb_date,
    no_of_package,
    gweight,
    chweight,
    dimensions,
    commodity,
    terms_of_shipment,
    origin_port,
    destination_port,
    airlines_name,
    flight_no,
    flight_date,
    etd,
    eta,
    agent_debit_note,
    agent_debit_note_date,
    amount,
    currency,
    airline_debit_note,
    airline_debit_note_date,
    shipper_invoice_no,
    amount_invoice,
    currency_invoice,
    consol_manifest,
    airline_do_issued,
    cha,
  } = req.body;

  const sql = `
    INSERT INTO air_exports (
      job_no, co_loader, agent_name, shipping_bill_no, shipping_bill_date,
      mawb_no, mawb_date, hawb_no, hawb_date, no_of_package,
      gweight, chweight, dimensions, commodity, terms_of_shipment,
      origin_port, destination_port, airlines_name, flight_no,
      flight_date, etd, eta, agent_debit_note, agent_debit_note_date,
      amount, currency, airline_debit_note, airline_debit_note_date,
      shipper_invoice_no, amount_invoice, currency_invoice,
      consol_manifest, airline_do_issued, cha, created_by, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 
              ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`;

  const values = [
    job_no,
    co_loader,
    agent_name,
    shipping_bill_no,
    shipping_bill_date,
    mawb_no,
    mawb_date,
    hawb_no,
    hawb_date,
    no_of_package,
    gweight,
    chweight,
    dimensions,
    commodity,
    terms_of_shipment,
    origin_port,
    destination_port,
    airlines_name,
    flight_no,
    flight_date,
    etd,
    eta,
    agent_debit_note,
    agent_debit_note_date,
    amount,
    currency,
    airline_debit_note,
    airline_debit_note_date,
    shipper_invoice_no,
    amount_invoice,
    currency_invoice,
    consol_manifest,
    airline_do_issued,
    cha,
    req.user.userEmail,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting air export data: ", err);
      res.status(500).json({ error: "Failed to save air export data" });
    } else {
      res.status(200).json({
        message: "Air export data saved successfully!",
        id: result.insertId,
      });
    }
  });
});

module.exports = router;
