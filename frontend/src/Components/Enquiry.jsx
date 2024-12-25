import React, { useState } from "react";
import axios from "axios";
function Enquiry() {
  const [formData, setFormData] = useState({
    customer_code: "",
    customer_name: "",
    service_request: "",
    mode: "",
    origin_port: "",
    delivery_port: "",
    no_of_packages: "",
    weight: "",
    dimensions: "",
    commodity: "",
    terms_of_shipment: "",
    invoice_no: "",
    invoice_value: "",
    service_request2: "",
    currency: "",
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
        "http://localhost:5000/overview/enquiry",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Enquiry error:", error);
    }
  };
  return (
    <div className="ml-12 p-4">
      <form
        className="grid grid-cols-1 gap-4 lg:mr-72 md:grid-cols-2"
        onSubmit={handleSubmit}
      >
        {/* Left Column */}
        <div className="first">
          {/* Customer Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Customer Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Customer Code:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="customer_code"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Customer Name:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="customer_name"
              />
            </div>
          </div>

          {/* Service Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Service Details
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Service Request:
              </label>
              <select
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="service_request"
              >
                <option value={"Import"}>Import</option>
                <option value={"Export"}>Export</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Mode:</label>
              <select
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="mode"
              >
                <option value={"Air"}>Air</option>
                <option value={"Sea"}>Sea</option>
              </select>
            </div>
          </div>

          {/* Shipment Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Shipment Details
            </h1>

            <div className="field-center grid lg:grid-cols-2 gap-4 bg-red my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Origin Port:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="origin_port"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Delivery Port:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="delivery_port"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No of Packages:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="no_of_packages"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Weight:</label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="weight"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Dimensions:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="dimensions"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="commodity"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Terms of Shipment:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="terms_of_shipment"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="second">
          {/* Invoice Details */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Invoice Details
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Invoice No:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="invoice_no"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Invoice Value:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="invoice_value"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Service Request:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="service_request2"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Currency:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
                onChange={handleChange}
                name="currency"
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

export default Enquiry;
