import React from "react";

function Enquiry() {
  return (
    <div className="ml-12 p-4">
      <form className="grid grid-cols-1 gap-4 lg:mr-72 md:grid-cols-2">
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
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Customer Name:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
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
              <select className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800">
                <option>Import</option>
                <option>Export</option>
              </select>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Mode:</label>
              <select className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800">
                <option>Air</option>
                <option>Sea</option>
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
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Delivery Port:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No of Packages:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Weight:</label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Dimensions:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 my-3">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Terms of Shipment:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
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
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Invoice Value:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Service Request:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Currency:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4 lg:w-3/4 border px-3 border-slate-800"
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
