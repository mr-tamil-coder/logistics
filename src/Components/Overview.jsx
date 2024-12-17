import React, { useState } from "react";

import AirExportChart from "./Charts/AirExportChart";
import AirImportChart from "./Charts/AirImportChart";
import SeaExport from "./Charts/SeaExport";
import SeaImport from "./Charts/SeaImport";
import Overviewlogo from "./Overviewlogo";
import BarChart from "./Charts/BarChart";
import Customer from "./Customer";
import "./overview.css";
import Sidebar from "./SideBar";
import Enquiry from "./Enquiry";

import SeaInfo from "./SeaInfo";
import Air from "./Air";
function Overview() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAirTabActive, setIsAirTabActive] = useState(false);
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setIsAirTabActive(tab === "Air");
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="header fixed top-0 left-0 right-0 z-2">
        <Overviewlogo isAirTabActive={isAirTabActive} />
      </div>

      {/* Navigation Sidebar */}
      <div
        className="nav fixed top-32 left-0 h-[calc(100%-8rem)] z-10"
        onMouseEnter={() => setIsNavOpen(!isNavOpen)}
        onMouseLeave={() => setIsNavOpen(false)}
      >
        <Sidebar selectedTab={selectedTab} handleTabChange={handleTabChange} />
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
              <Customer />
            </div>
          )}
          {selectedTab === "Enquiry" && (
            <div>
              <Enquiry />
            </div>
          )}
          {selectedTab === "Air" && (
            <div>
              <Air />
            </div>
          )}
          {selectedTab === "Sea" && (
            <div>
              <SeaInfo />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
