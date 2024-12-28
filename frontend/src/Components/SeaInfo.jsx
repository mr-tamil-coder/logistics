import React from "react";

const SeaInfo = () => {
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
            
            
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Name :
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
              Shipping Details
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MBL No:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MBL Date:</label>
              <input
                type="date"
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">HBL No:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-2">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HBL Date:</label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">GWeight:</label>
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
                Dimension:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
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
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
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
              <label className="label w-full lg:w-3/4 sm:w-1/3">Date:</label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
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
              <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
                <label className="label w-full lg:w-3/4 sm:w-1/3">
                  Liner Debit Note:
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
                LEO Issued or Not:
              </label>
              <select className="label-input w-full border px-3 border-slate-800 rounded">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">EGM:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Invoice No:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
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
            />
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">BOE No:</label>
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
              />
            </div>
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
                Destination Port:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Line:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Vessel Name:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
          </div>
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">Voyage No:</label>
            <input
              type="text"
              className="label-input w-full border px-3 border-slate-800 rounded"
            />
          </div>

          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">ETD:</label>
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
          <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
            <label className="label w-full lg:w-3/4 sm:w-1/3">
              Vessel Berthing Date:
            </label>
            <input
              type="Date"
              className="label-input w-full border px-3 border-slate-800 rounded"
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
