import React, { useState } from "react";
import "./logo.css";
import ivw from "./img/logo.png";
import { MdNotificationsNone } from "react-icons/md";
import Profile from "./Profile";

function Overviewlogo({ isAirTabActive }) {
  const [activeAirTab, setActiveAirTab] = useState("Air Import"); // Default tab

  return (
    <div className="flex justify-between bg-gray-300 h-32">
      {/* Logo Section */}
      <div className="px-6 py-4 flex items-center">
        <img src={ivw} alt="Logo" className="h-12 md:h-16 object-contain" />
      </div>

      {/* Air Tabs Section */}
      {isAirTabActive && (
        <div className="flex mr-72 gap-4 items-center">
          {/* Air Import Button */}
          <button
            onClick={() => setActiveAirTab("Air Import")}
            className={`border border-black px-10 py-2 text-lg rounded-md transition duration-300 ${
              activeAirTab === "Air Import"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Air Import
          </button>

          {/* Air Export Button */}
          <button
            onClick={() => setActiveAirTab("Air Export")}
            className={`border border-black px-10 py-2 text-lg rounded-md transition duration-300 ${
              activeAirTab === "Air Export"
                ? "bg-green-500 text-white"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Air Export
          </button>
        </div>
      )}

      {/* Notifications and Profile */}
      <div className="flex items-center gap-4">
        <button className="bg-green-400 text-white text-2xl h-12 w-16 flex justify-center items-center rounded-xl hover:bg-gray-600">
          <MdNotificationsNone />
        </button>
        <Profile />
      </div>

     
    </div>
  );
}

export default Overviewlogo;
