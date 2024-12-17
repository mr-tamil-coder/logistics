import React from "react";

function Air() {
  return (
    <div className="ml-12 p-4">
      <form className="grid grid-cols-1 gap-4 lg:gap-20 lg:grid-cols-3 md:grid-cols-2">
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
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Name:
              </label>
              <input
                type="text"
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
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Shipping Bill Date:
              </label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">MAWB No:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                MAWB Date:
              </label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">HAWB No:</label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                No. of Pkg:
              </label>
              <input
                type="number"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                G.Weight:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Ch. Weight:
              </label>
              <input
                type="text"
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
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Commodity:
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
                Airlines Name:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Flight No:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Flight Date:
              </label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">ETA:</label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">ETD:</label>
              <input
                type="date"
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
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Agent Debit Note Date:
              </label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
              <input
                type="number"
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
                Airline Debit Note:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airline Debit Note Date:
              </label>
              <input
                type="date"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
          </div>
        </div>
        <div>
          {/* Documentation and Billing */}
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
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">Amount:</label>
              <input
                type="number"
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
                Consol Manifest:
              </label>
              <input
                type="text"
                className="label-input w-full border px-3 border-slate-800 rounded"
              />
            </div>
            <div className="field-center grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-3/4 sm:w-1/3">
                Airline DO Issued or Not:
              </label>
              <select className="label-input w-full border px-3 border-slate-800 rounded">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Air;
