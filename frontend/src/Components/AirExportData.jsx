import React, { useState } from "react";
import axios from "axios";

function AirExportData() {
  const [formData, setFormData] = useState({
    job_no: "",
    co_loader: "",
    agent_name: "",
    shipping_bill_no: "",
    shipping_bill_date: "",
    mawb_no: "",
    mawb_date: "",
    hawb_no: "",
    hawb_date: "",
    no_of_package: "",
    gweight: "",
    chweight: "",
    dimensions: "",
    commodity: "",
    terms_of_shipment: "",
    origin_port: "",
    destination_port: "",
    airlines_name: "",
    flight_no: "",
    flight_date: "",
    etd: "",
    eta: "",
    agent_debit_note: "",
    agent_debit_note_date: "",
    amount: "",
    currency: "",
    airline_debit_note: "",
    airline_debit_note_date: "",
    shipper_invoice_no: "",
    amount_invoice: "",
    currency_invoice: "",
    consol_manifest: "",
    airline_do_issued: "No",
    cha: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/air-export', formData, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error saving air export data:', error);
      alert('Failed to save air export data');
    }
  };

  return (
    <div className="ml-12 p-4">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 lg:gap-20 md:grid-cols-3">
        {/* Left Column */}
        <div className="first">
          {/* Job Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Job Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Job No:</label>
              <input
                type="text"
                name="job_no"
                value={formData.job_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Co-Loader:
              </label>
              <input
                type="text"
                name="co_loader"
                value={formData.co_loader}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Name:
              </label>
              <input
                type="text"
                name="agent_name"
                value={formData.agent_name}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
          </div>

          {/* Shipping and Package Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Shipping and Package Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Bill No:
              </label>
              <input
                type="text"
                name="shipping_bill_no"
                value={formData.shipping_bill_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Bill Date:
              </label>
              <input
                type="date"
                name="shipping_bill_date"
                value={formData.shipping_bill_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MAWB No:</label>
              <input
                type="text"
                name="mawb_no"
                value={formData.mawb_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                MAWB Date:
              </label>
              <input
                type="date"
                name="mawb_date"
                value={formData.mawb_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HAWB No:</label>
              <input
                type="text"
                name="hawb_no"
                value={formData.hawb_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HAWB Date:</label>
              <input
                type="date"
                name="hawb_date"
                value={formData.hawb_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No. of Pkg:
              </label>
              <input
                type="number"
                name="no_of_package"
                value={formData.no_of_package}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                G.Weight:
              </label>
              <input
                type="text"
                name="gweight"
                value={formData.gweight}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Ch. Weight:
              </label>
              <input
                type="text"
                name="chweight"
                value={formData.chweight}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Dimensions:
              </label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity:
              </label>
              <input
                type="text"
                name="commodity"
                value={formData.commodity}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="second">
          {/* Port and Flight Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Port and Flight Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Terms of Shipment:
              </label>
              <input
                type="text"
                name="terms_of_shipment"
                value={formData.terms_of_shipment}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Origin Port:
              </label>
              <input
                type="text"
                name="origin_port"
                value={formData.origin_port}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Destination Port:
              </label>
              <input
                type="text"
                name="destination_port"
                value={formData.destination_port}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airlines Name:
              </label>
              <input
                type="text"
                name="airlines_name"
                value={formData.airlines_name}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Flight No:
              </label>
              <input
                type="text"
                name="flight_no"
                value={formData.flight_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Flight Date:
              </label>
              <input
                type="date"
                name="flight_date"
                value={formData.flight_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">ETD:</label>
              <input
                type="text"
                name="etd"
                value={formData.etd}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">ETA:</label>
              <input
                type="text"
                name="eta"
                value={formData.eta}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            
          </div>

          {/* Agent and Linear Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Agent and Linear Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Debit Note:
              </label>
              <input
                type="text"
                name="agent_debit_note"
                value={formData.agent_debit_note}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Debit Note Date:
              </label>
              <input
                type="date"
                name="agent_debit_note_date"
                value={formData.agent_debit_note_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Currency:
              </label>
              <input
                type="text"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airline Debit Note:
              </label>
              <input
                type="text"
                name="airline_debit_note"
                value={formData.airline_debit_note}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airline Debit Note Date:
              </label>
              <input
                type="date"
                name="airline_debit_note_date"
                value={formData.airline_debit_note_date}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
          </div>

          {/* Documentation and Billing */}
          
        </div>
        <div className="third">
        <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Documentation and Billing
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipper Invoice No:
              </label>
              <input
                type="text"
                name="shipper_invoice_no"
                value={formData.shipper_invoice_no}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
              <input
                type="number"
                name="amount_invoice"
                value={formData.amount_invoice}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Currency:
              </label>
              <input
                type="text"
                name="currency_invoice"
                value={formData.currency_invoice}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Consol Manifest:
              </label>
              <input
                type="text"
                name="consol_manifest"
                value={formData.consol_manifest}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airline DO Issued or Not:
              </label>
              <select
                name="airline_do_issued"
                value={formData.airline_do_issued}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                CHA:
              </label>
              <input
                type="text"
                name="cha"
                value={formData.cha}
                onChange={handleChange}
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="mt-20 flex justify-center items-center space-x-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded">
                Save All
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AirExportData;
