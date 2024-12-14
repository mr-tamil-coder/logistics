import React from "react";
import "./logo.css";
import ivw from "./img/logo.png";
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

function Overviewlogo() {
  return (
    <div className="flex justify-between bg-gray-300">
      <div className="  px-6 py-4 shadow-md flex  justify-between">
        {/* Logo */}
        <img src={ivw} alt="Logo" className="h-12 md:h-16 object-contain" />
      </div>
      <div className="flex justify-center items-center gap-4">
        {/* Notific+ications */}
        <button className="bg-green-400 text-white text-2xl h-16 w-16   flex justify-center items-center rounded-xl hover:bg-gray-600">
          <MdNotificationsNone />
        </button>

        {/* User Info */}
        <div className="text-red-500 flex items-center justify-center flex-col px-5 space-x-2">
          <AiOutlineUser className="text-3xl" />
          <div>
            <p className="text-sm font-medium">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overviewlogo;
