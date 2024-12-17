import React from "react";
import { FaSave } from "react-icons/fa";
// import "./customer.css"
function Customer() {
  return (
    <div className="ml-12 p-4">
      <form className="grid grid-cols-1 gap-4 lg:gap-20 md:grid-cols-2">
        {/* Left Column */}
        <div className="first">
          {/* Customer Identification */}
          <div className="mb-6  ">
            <h1 className="customer-heading text-lg font-bold mb-4">
              Customer Identification
            </h1>
            <div className="field-center grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4  sm:w-1/3">
                Customer Code:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
               
              />
            </div>
            <div className="grid lg:grid-cols-2  gap-4 mt-4">
              <label className="label w-full lg:w-3/4  sm:w-1/3">
                Customer Name:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full  lg:w-3/4  sm:w-1/3">
                Contact Person Name:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-2/4  sm:w-1/3">
                Address:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-2/4  sm:w-1/3">
                Phone Number:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-2/4  sm:w-1/3">
                Mail Id:
              </label>
              <input
                type="email"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
          </div>

          {/* Sales Information */}
          <div className="mb-6">
            <h1 className="customer-heading text-lg font-bold mb-4 ">
              Sales Information
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-3/4  sm:w-1/3">
                LKC Sales Person:
              </label>
              <input
                type="text"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
                
              />
            </div>
          </div>

          {/* Follow-Up Information */}
          <div>
            <h1 className="customer-heading text-lg font-bold mb-4">
              Follow-Up Information
            </h1>
            <div className="grid lg:grid-cols-2 gap-4">
              <label className="label w-full lg:w-2/4  sm:w-1/3">
                Visit Date:
              </label>
              <input
                type="date"
                className="label-input w-full md:w-2/4  lg:w-3/4  px-3 border border-slate-800"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              <label className="label w-full lg:w-2/4  sm:w-1/3">
                Follow-Up Date:
              </label>
              <input
                type="date"
                className="label-input w-full md:w-2/4  lg:w-3/4 border px-3 border-slate-800"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="second  ">
          <div className="grid grid-cols-2 gap-2  w-full ">
            <div className="mb-6">
              <h1 className="font-bold mb-4">Customer Requirements</h1>
              <textarea
                rows={5}
                className="w-full  rounded p-2 border border-slate-800"
                
              ></textarea>
            </div>
            <div className="mb-6">
              <h1 className="font-bold mb-4">Feedback:</h1>
              <textarea
                rows={5}
                cols={2}
                className="w-full border border-slate-800 rounded p-2"
                
              ></textarea>
            </div>
          </div>
          <div>
            <h1 className="font-bold mb-4">Document Uploads:</h1>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h1 className="font-bold mb-2">Identification Proofs:</h1>
                <label>PAN Copy:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border border-slate-800 rounded p-2"
                    
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>TAN Copy:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border border-slate-800 rounded p-2"
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>Aadhaar Copy:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border border-slate-800 rounded p-2"
                    
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>Telephone Copy:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                    
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              <div className="mt-4">
                <h1 className="font-bold mb-2">Financial Documents:</h1>
                <label>Bank Cheque Copy:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                   
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>Credit Application Form:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                   
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>Incorporation Certificate:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                   
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
                <label>GST Form 6 Annexure B:</label>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="w-full border rounded p-2"
                   
                  />
                  <FaSave className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
           
          <button className="px-4 py-2 bg-green-500 text-white rounded">
              Upload
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded">
              Save All
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Customer;
