import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineUser, AiOutlineGlobal } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";
import { VscPieChart } from "react-icons/vsc";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
 

  return (
    <div >
      {/* Sidebar Container */}
      <div
        className={`fixed top-30 left-0 h-screen overflow-y-auto bg-gray-100 shadow-lg transition-all duration-300 ${
          isNavOpen ? "w-64" : "w-24"
        } `}
        onMouseEnter={() => setIsNavOpen(!isNavOpen)}
        onMouseLeave={() => setIsNavOpen(false)}
      >
        <ul className="p-4 space-y-4 overflow-y-auto">
          {/* Navigation Items */}
          <li
            className={`flex items-center gap-2 p-2 text-lg cursor-pointer rounded-md ${
              selectedTab === "Dashboard"
                ? "bg-green-300"
                : "hover:bg-green-300"
            } hover:scale-125 hover:bg-blue-200 `}
            onClick={() => setSelectedTab("Dashboard")}
          >
            <div className="icons text-3xl">
              <RxDashboard className="text-green-400"/>
            </div>
            {isNavOpen && <span>Dashboard</span>}
          </li>
          <li
            className={`flex items-center gap-2 p-2 text-lg cursor-pointer ${
              selectedTab === "Customer"
                ? "bg-green-300"
                : "hover:bg-green-300"
            } hover:scale-125 hover:bg-blue-200 rounded-md `}
            onClick={() => setSelectedTab("Customer")}
          >
            <AiOutlineUser className="text-2xl text-blue-700" />
            {isNavOpen && <span>Customer</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <RiFocus3Line className="text-2xl text-blue-500" />
            {isNavOpen && <span>Enquiry</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <BsFillBoxSeamFill className="text-2xl" />
            {isNavOpen && <span>Air</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <AiOutlineGlobal className="text-2xl" />
            {isNavOpen && <span>Sea</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200  hover:scale-125 rounded-md">
            <TbReport className="text-2xl" />
            {isNavOpen && <span>Customer Clearance</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <FaTruckFast className="text-2xl text-blue-500" />
            {isNavOpen && <span>Transporter</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <CiLocationArrow1 className="text-2xl text-violet-700" />
            {isNavOpen && <span>Opus-corner</span>}
          </li>
          <li className="flex items-center gap-2 p-2 text-lg cursor-pointer hover:bg-blue-200 hover:scale-125 rounded-md">
            <VscPieChart className="text-2xl text-red-500" />
            {isNavOpen && <span>Reports</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
