  import React from "react";
  import "./logo.css";
  import ivw from "./img/logo.png";
  import { MdNotificationsNone } from "react-icons/md";
  import { AiOutlineUser } from "react-icons/ai";
  import Profile from "./Profile";

  function Overviewlogo({ isAirTabActive }) {
    return (
      <div className="flex justify-between bg-gray-300 h-32">
        <div className="  px-6 py-4  flex  justify-between items-center">
          {/* Logo */}
          <img src={ivw} alt="Logo" className="h-12 md:h-16 object-contain" />
        </div>

 {/* Conditionally Render Air Tabs */}
 {isAirTabActive && (
          <div className="ml-8 flex gap-4">
            <button className="bg-yellow-300 px-4 py-2 rounded hover:bg-yellow-400">
              Air Import
            </button>
            <button className="bg-yellow-300 px-4 py-2 rounded hover:bg-yellow-400">
              Air Export
            </button>
          </div>
        )}


        <div className="flex justify-center items-center gap-4">
          {/* Notific+ications */}
          <button className="bg-green-400 text-white text-2xl h-12 w-16   flex justify-center items-center rounded-xl hover:bg-gray-600">
            <MdNotificationsNone />
          </button>

          {/* User Info */}
          <Profile />
        </div>
      </div>
    );
  }

  export default Overviewlogo;
