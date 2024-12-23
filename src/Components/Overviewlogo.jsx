import React, { useState } from "react";
import "./logo.css";
import ivw from "./img/logo.png";
import { MdNotificationsNone } from "react-icons/md";
import Profile from "./Profile";
import "./customer.css";
import "./overview.css";
import { Title } from "chart.js";
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
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 leading-relaxed animate-fade-in animate-move-left-to-right">
          Lead King Consolidators
        </h1>
      </div>

      {/* <Title /> */}

      {/* Notifications and Profile */}
      <div className="flex items-center gap-2">
        <button className="bg-green-400 text-white text-2xl h-12 w-16 flex justify-center items-center rounded-xl hover:bg-gray-600">
          <MdNotificationsNone />
        </button>
        <Profile />
      </div>
    </div>
  );
}

export default Overviewlogo;
