import React, { useState } from "react";
import axios from "axios";

const SeaInfo = () => {
  const [formData, setFormData] = useState({
    job_no: "",
    co_loader: "",
    agent_name: "",
    mbl_no: "",
    container_no: "",
    container_load: "",
    hbl_no: "",
    no_of_package: "",
    gweight: "",
    cbm: "",
    dimension: "",
    commodity: "",
    shipper_invoice_no: "",
    amount: "",
    currency: "",
    date: "",
    agent_debit_note: "",
    agent_debit_date: "",
    agent_debit_amount: "",
    agent_debit_currency: "",
    liner_debit_note: "",
    liner_debit_date: "",
    cha: "",
    cha_date: "",
    leo_issued: "",
    egm: "",
    shipping_invoice_no: "",
    igm_control_manifest: "",
    boe_no: "",
    boe_date: "",
    terms_of_shipment: "",
    origin_port: "",
    destination_port: "",
    shipping_line: "",
    vessel_name: "",
    voyage_no: "",
    etd: "",
    eta: "",
    vessel_berthing_date: "",
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
        "http://localhost:5000/sea-info",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Sea import error:" + error);
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

            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Name :
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="agent_name"
                value={formData.agent_name}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Shipping Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Shipping Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MBL NO:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="mbl_no"
                value={formData.mbl_no}
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
              <select className="label-input w-full border px-3 border-slate-800 rounded" name="container_load" value={formData.container_load} onChange={handleChange}>
                <option value="FCL">FCL</option>
                <option value="LCL">LCL</option>
              </select>
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HBL No:</label>
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">GWeight:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="gweight"
                value={formData.gweight}
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
                Dimension:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="dimension"
                value={formData.dimension}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="commodity"
                value={formData.commodity}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="second">
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            {/* Agent and Linear Details */}
            <div className="mb-6">
              <h1 className="customer-heading text-lg font-bold my-6">
                Agent and Linear Details
              </h1>
              <div className="field-center grid lg:grid-cols-2 gap-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Agent Debit Note:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_debit_note"
                  value={formData.agent_debit_note}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="agent_debit_date"
                  value={formData.agent_debit_date}
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
                  name="agent_debit_amount"
                  value={formData.agent_debit_amount}
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
                  name="agent_debit_currency"
                  value={formData.agent_debit_currency}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Liner Debit Note:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="liner_debit_note"
                  value={formData.liner_debit_note}
                  onChange={handleChange}
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                  name="liner_debit_date"
                  value={formData.liner_debit_date}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="third">
          {/* Customer Clearance */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Customer Clearance
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">CHA:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="cha"
                value={formData.cha}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="cha_date"
                value={formData.cha_date}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                LEO Issued or Not:
              </label>
              <select
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="leo_issued"
                value={formData.leo_issued}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">EGM:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="egm"
                value={formData.egm}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Invoice No:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="shipping_invoice_no"
                value={formData.shipping_invoice_no}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">
              IGM Control Manifest:
            </label>
            <input
              type="text"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="igm_control_manifest"
              value={formData.igm_control_manifest}
              onChange={handleChange}
            />
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">BOE No:</label>
            <input
              type="text"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="boe_no"
              value={formData.boe_no}
              onChange={handleChange}
            />
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
            <input
              type="date"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="boe_date"
              value={formData.boe_date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold my-6">
              Port Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
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
                Destination Port:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
                name="destination_port"
                value={formData.destination_port}
                onChange={handleChange}
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
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
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
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
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">Voyage No:</label>
            <input
              type="text"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="voyage_no"
              value={formData.voyage_no}
              onChange={handleChange}
            />
          </div>

          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">ETD:</label>
            <input
              type="date"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="etd"
              value={formData.etd}
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
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">
              Vessel Berthing Date:
            </label>
            <input
              type="Date"
              className="label-input w-full border px-3 border-slate-800 rounded"
              name="vessel_berthing_date"
              value={formData.vessel_berthing_date}
              onChange={handleChange}
            />
          </div>
          <div className="mt-20 flex justify-center items-center space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Save All
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SeaInfo;
