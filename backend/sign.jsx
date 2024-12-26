import React, { useState } from "react";
import "./login.css";
import Logo from "./Logo.jsx";
import axios from "axios"; 

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
// POST http://localhost:5000/api/transport/sea-info
{
  "job_no": "SI001",
  "co_loader": "ABC Logistics",
  "agent_name": "John Doe",
  "mbl_no": "MBL123456",
  "container_no": "CONT789",
  "container_load": "FCL",
  "hbl_no": "HBL456789",
  "no_of_package": 10,
  "gweight": 1000.50,
  "cbm": 20.5,
  "dimension": "100x100x100",
  "commodity": "Electronics",
  "shipper_invoice_no": "INV001",
  "amount": 5000.00,
  "currency": "USD",
  "date": "2024-01-15",
  "agent_debit_note": "ADN001",
  "agent_debit_date": "2024-01-16",
  "agent_debit_amount": 200.00,
  "agent_debit_currency": "USD",
  "liner_debit_note": "LDN001",
  "liner_debit_date": "2024-01-17",
  "cha": "CHA Partners",
  "cha_date": "2024-01-18",
  "leo_issued": "Yes",
  "egm": "EGM001",
  "shipping_invoice_no": "SIN001",
  "igm_control_manifest": "ICM001",
  "boe_no": "BOE001",
  "boe_date": "2024-01-19",
  "terms_of_shipment": "FOB",
  "origin_port": "Singapore",
  "destination_port": "Mumbai",
  "shipping_line": "Maersk",
  "vessel_name": "MSC Gloria",
  "voyage_no": "V001",
  "etd": "2024-01-20",
  "eta": "2024-02-01",
  "vessel_berthing_date": "2024-02-02"
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Logo />
      <div className="mt-12 flex items-center justify-center">
        <div className="w-10/12 md:w-1/2 lg:w-1/4 h-4/5 md:h-4/5 max-h-screen rounded-lg shadow-lg bg-gray-300">
          <form
            className="web-color p-6 rounded-lg shadow-lg signup-height"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              className="input-box my-2 p-4 border border-gray-300 rounded w-full"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="Password"
              value={formData.username}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              className="input-box my-3 p-4 border border-gray-300 rounded w-full"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            <div className="text-center mb-3">
              <button
                type="submit"
                className="bg-black text-white py-2 mt-7 px-4 rounded w-2/5 hover:bg-blue-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
