import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { RiFocus3Line } from "react-icons/ri";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaTruckFast } from "react-icons/fa6";
import { VscPieChart } from "react-icons/vsc";
import { TbReport } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillBoxSeamFill } from "react-icons/bs";
import AirExportChart from "./Charts/AirExportChart";
import AirImportChart from "./Charts/AirImportChart";
import SeaExport from "./Charts/SeaExport";
import SeaImport from "./Charts/SeaImport";
import Overviewlogo from "./Overviewlogo";
import BarChart from "./Charts/BarChart";

function Overview() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="flex flex-col h-screen">
      {/* Header
      <header className="w-full bg-blue-500 text-white p-4 shadow-md flex justify-between items-center">
        <img src="" alt="" />
        <div className="flex items-center space-x-4">
          <span>Welcome, User</span>
        </div> 
      </header>*/}
      <Overviewlogo />

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Navigation Sidebar */}
        <ul className="w-52 bg-gray-100 p-4 space-y-4 shadow-md">
          <li
            className="style-effect  flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={() => setSelectedTab("Dashboard")}
          >

            <RxDashboard style={{color:"blue"}}/>
          <span>  Dashboard</span>
            
          </li>
          <li
            className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md"
            onClick={() => setSelectedTab("Customer")}
          >
            <AiOutlineUser style={{color:"blue"}}/>
            Customer
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <RiFocus3Line style={{color:"lightblue"}}/>
            Enquiry
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <BsFillBoxSeamFill />
            Air
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <AiOutlineGlobal />
            Sea
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <TbReport style={{color:"gray"}}/>
            Customer Clearance
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <FaTruckFast style={{color:"lightblue"}} />
            Transporter
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <CiLocationArrow1 style={{color:"violet"}}/>
            Opus-corner
          </li>
          <li className="flex items-center gap-2 p-3 text-lg cursor-pointer hover:bg-gray-200 rounded-md">
            <VscPieChart style={{color:"red"}}/>
            Reports
          </li>
        </ul>

        {/* Charts Section */}
        <div className="flex-grow p-4">
          {selectedTab === "Dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Air Charts */}
              <div>
                <AirExportChart />
              </div>
              <div>
                <AirImportChart />
              </div>

              {/* Sea Charts */}
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SeaExport />
                <SeaImport />
                <BarChart />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
