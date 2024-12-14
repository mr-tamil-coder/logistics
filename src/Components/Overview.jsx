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
import "./overview.css";
import Sidebar from "./SideBar";
function Overview() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="header fixed top-0 left-0 right-0 z-2">
        <Overviewlogo />
      </div>

      {/* Navigation Sidebar */}
      <div
        className="nav fixed top-32 left-0 h-[calc(100%-8rem)] z-10"
        onMouseEnter={() => setIsNavOpen(!isNavOpen)}
        onMouseLeave={() => setIsNavOpen(false)}
      >
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Adjust Content for Sidebar */}
        <div
          className={`flex-grow p-4 ml-16 mt-32 ${
            isNavOpen ? "ml-64" : ""
          } overflow-y-auto h-[calc(100vh-1rem)]  `}
        >
          {selectedTab === "Dashboard" && (
            <div>
              {/* Air Charts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AirExportChart />
                <AirImportChart />
              </div>

              {/* Sea Charts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <SeaExport />
                <SeaImport />
                <BarChart />
              </div>
            </div>
          )}

          {selectedTab === "Customer" && (
            <div>
              <h1 className="text-3xl mx-4">Customer Content Goes Here</h1>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
