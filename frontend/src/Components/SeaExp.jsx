import React, { useState } from "react";
import axios from "axios";

const SeaExp = () => {
  const [formData, setFormData] = useState({
    job_no: "",
    co_loader: "",
    mbl_no: "",
    hbl_no: "",
    container_no: "",
    container_load: "",
    no_of_package: "",
    weight: "",
    cbm: "",
    dimensions: "",
    commodity: "",
    terms_of_shipment: "",
    shipping_line: "",
    vessel_name: "",
    eta: "",
    shipper_invoice_no: "",
    amount: "",
    currency: "",
    cha: "",
    origin_port: "",
    delivery_port: "",
    shipping_bill_no: "",
    shipping_bill_date: "",
    do_issued: "",
    agent_invoice_no: "",
    agent_invoice_date: "",
    agent_invoice_amount: "",
    agent_invoice_currency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/sea-export",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Sea export error:" + error);
    }
  };

  return (
    <div className="ml-12 p-4">
      <form className="grid grid-cols-1 gap-4 lg:gap-20 md:grid-cols-3" onSubmit={handleSubmit}>
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
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="job_no"
                value={formData.job_no}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Co-Loader:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="co_loader"
                value={formData.co_loader}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Shipping Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Shipment Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4 ">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MBL NO:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="mbl_no"
                value={formData.mbl_no}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HBL NO:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="hbl_no"
                value={formData.hbl_no}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Container No:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="container_no"
                value={formData.container_no}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Container Load:
              </label>
              <select
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="container_load"
                value={formData.container_load}
                onChange={handleChange}
              >
                <option value="FCL">FCL</option>
                <option value="LCL">LCL</option>
              </select>
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No of Package:
              </label>
              <input
                type="number"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="no_of_package"
                value={formData.no_of_package}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Weight:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">CBM:</label>
              <input
                type="number"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="cbm"
                value={formData.cbm}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Dimensions:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="second">
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Goods Information
              </h1>

              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Commodity:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="commodity"
                  value={formData.commodity}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Terms of Shipment:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="terms_of_shipment"
                  value={formData.terms_of_shipment}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Shipping Details
              </h1>
              <div className="field-center grid lg:grid-cols-2 gap-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Shipping Line:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="shipping_line"
                  value={formData.shipping_line}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Vessel Name:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="vessel_name"
                  value={formData.vessel_name}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">ETA:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="eta"
                  value={formData.eta}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/*  Billing Information */}
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Billing Information
              </h1>
              <div className="field-center grid lg:grid-cols-2 gap-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Shipper Invoice No :
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="shipper_invoice_no"
                  value={formData.shipper_invoice_no}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Amount:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Currency:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">CHA:</label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="cha"
                  value={formData.cha}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Port Details
              </h1>

              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Origin Port:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="origin_port"
                  value={formData.origin_port}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Delivery Port:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="delivery_port"
                  value={formData.delivery_port}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Customer Clearance */}
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Customers Clearance
              </h1>

              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Shipping Bill No:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="shipping_bill_no"
                  value={formData.shipping_bill_no}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="shipping_bill_date"
                  value={formData.shipping_bill_date}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  DO Issued or Not:
                </label>
                <select
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="do_issued"
                  value={formData.do_issued}
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            {/* Customer Clearance */}
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold mb-4">
                Agent Billing
              </h1>

              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Agent Invoice No:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_invoice_no"
                  value={formData.agent_invoice_no}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_invoice_date"
                  value={formData.agent_invoice_date}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Amount:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_invoice_amount"
                  value={formData.agent_invoice_amount}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Currency:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_invoice_currency"
                  value={formData.agent_invoice_currency}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-20 flex justify-center items-center space-x-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded">
                  Save All
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SeaExp;
