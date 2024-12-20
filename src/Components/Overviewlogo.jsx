import React, { useState } from "react";
import "./logo.css";
import ivw from "./img/logo.png";
import { MdNotificationsNone } from "react-icons/md";
import Profile from "./Profile";
import "./customer.css";
function Overviewlogo({
  isDashboardTabActive,
  isEnquiryTabActive,
  isCustomerTabActive,
  isAirTabActive,
  activeAirTab,
  setActiveAirTab,
  isSeaTabActive,
  activeSeaTab,
  setActiveSeaTab,
}) {
  return (
    <div className="flex  bg-gray-300 h-28 justify-between">
      {/* Logo Section */}
      <div className="px-6 py-4 flex items-center ">
        <img src={ivw} alt="Logo" className="h-12 md:h-16 object-contain" />
      </div>
      <div className="flex items-center p-4">
  <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 leading-relaxed">
    Lead King Consolidators
  </h1>
</div>


      {/* Notifications and Profile */}
      <div className="flex items-center gap-2">
        <button className="bg-green-400 text-white text-2xl h-12 w-16 flex justify-center items-center rounded-xl hover:bg-gray-600">
          <MdNotificationsNone />
        </button>
        <Profile />
      </div>
      {/* {isDashboardTabActive && (
        <div className="flex items-center w-1/6">
          <h1 className=" text-center border bg-white border-black text-xl x px-10 w-full py-2  transition duration-300">
            Dashboard
          </h1>
        </div>
      )} */}

      {/* Enquiry Tabs Section */}
      {/* {isCustomerTabActive && (
        <div className="flex items-center w-1/6">
          <h1 className=" text-center border bg-white border-black text-xl x px-10 w-full py-2  transition duration-300">
            Customer
          </h1>
        </div>
      )} */}

      {/* Enquiry Tabs Section */}
      {/* {isEnquiryTabActive && (
        <div className="flex items-center w-1/6">
          <h1 className=" text-center border bg-white border-black text-xl x px-10 w-full py-2  transition duration-300">
            Enquiry
          </h1>
        </div>
      )} */}

      {/* Air Tabs Section */}
      {/* {isAirTabActive && (
        <div className="flex  items-center w-4/6 ">
          <button
            onClick={() => setActiveAirTab("Air Import")}
            className={`border border-black px-10 w-4/6 py-2 text-lg  transition duration-300 ${
              activeAirTab === "Air Import"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Air Import
          </button>

          <button
            onClick={() => setActiveAirTab("Air Export")}
            className={`border border-black px-10 py-2 w-3/4 text-lg  transition duration-300 ${
              activeAirTab === "Air Export"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Air Export
          </button>
        </div>
      )} */}
      {/* {isSeaTabActive && (
        <div className="flex  items-center w-4/6 ">
          {/* Sea Import Button 
          <button
            onClick={() => setActiveSeaTab("Sea Import")}
            className={`border border-black px-10 w-4/6 py-2 text-lg  transition duration-300 ${
              activeSeaTab === "Sea Import"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Sea Import
          </button>

          {/* Sea Export Button 
          <button
            onClick={() => setActiveSeaTab("Sea Export")}
            className={`border border-black px-10 py-2 w-3/4 text-lg  transition duration-300 ${
              activeSeaTab === "Sea Export"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Sea Export
          </button>
        </div>
      )} */}
    </div>
  );
}

export default Overviewlogo;
