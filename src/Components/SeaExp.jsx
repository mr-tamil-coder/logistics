import React from "react";

const SeaExp = () => {
  return (
    <div className="ml-12 p-4">
      <form className="grid grid-cols-1 gap-4 lg:gap-20 md:grid-cols-3">
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
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Co-Loader:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
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
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HBL NO:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Container No:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Container Load:
              </label>
              <select className="label-input w-full border px-3 border-slate-800 rounded">
                <option>FCL</option>
                <option>LCL</option>
              </select>
            </div>

            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No of Package:
              </label>
              <input
                type="number"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Weight:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">CBM:</label>
              <input
                type="number"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Dimensions:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Terms of Shipment:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Vessel Name:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">ETA:</label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Amount:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Currency:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">CHA:</label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Delivery Port:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  DO Issued or Not:
                </label>
                <select className="label-input w-full border px-3 border-slate-800 rounded">
                  <option>Yes</option>
                  <option>No</option>
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
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
                <input
                  type="date"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Amount:
                </label>
                <input
                  type="text"
                  className="label-input w-full border px-3 border-slate-800 rounded"
                />
              </div>
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Currency:
                </label>
                <input
                  type="text"
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
        </div>
      </form>
    </div>
  );
};

export default SeaExp;
