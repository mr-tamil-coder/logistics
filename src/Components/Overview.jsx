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
import AirImportData from "./AirImportData";
import AirExportData from "./AirexportData";
import SeaExp from "./SeaExp";
import Opuscorner from "./Opuscorner";
function Overview() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAirTabActive, setIsAirTabActive] = useState(false);
  const [isSeaTabActive, setIsSeaTabActive] = useState(false);
  const [activeAirTab, setActiveAirTab] = useState("Air Import");
  const [activeSeaTab, setActiveSeaTab] = useState("Sea Import");
  const [isDashboardTabActive, setIsDashboardTabActive] = useState(true);
  const [isCustomerTabActive, setIsCustomerTabActive] = useState(false);
  const [isEnquiryTabActive, setIsEnquiryTabActive] = useState(false);
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setIsSeaTabActive(tab === "Sea");
    setIsAirTabActive(tab === "Air");
    setIsDashboardTabActive(tab === "Dashboard");
    setIsCustomerTabActive(tab === "Customer");
    setIsEnquiryTabActive(tab === "Enquiry");
  };
  return (
    <div className="flex flex-col h-screen">
      {/* Fixed Header */}
      <div className="header fixed top-0 left-0 right-0 z-10 ">
        <Overviewlogo
          isAirTabActive={isAirTabActive}
          activeAirTab={activeAirTab}
          setActiveAirTab={setActiveAirTab}
          isSeaTabActive={isSeaTabActive}
          activeSeaTab={activeSeaTab}
          setActiveSeaTab={setActiveSeaTab}
          isDashboardTabActive={isDashboardTabActive}
          isCustomerTabActive={isCustomerTabActive}
          isEnquiryTabActive={isEnquiryTabActive}
        />
      </div>
      {/* Navigation Sidebar */}
      <div
        className="nav fixed top-28 left-0 h-[calc(100%-8rem)] z-10"
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
            isNavOpen ? "" : ""
          }  h-[calc(100vh-1rem)]  `}
        >
          {selectedTab === "Dashboard" && (
            <div>
              <div className="text-center text-2xl">
                <button className="py-3 px-20 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 mb-6">
                  Dashboard
                </button>
              </div>

              {/* Air Charts */}
              <div className="flex ">
                <AirImportChart />
                <AirExportChart />
              </div>

              {/* Sea Charts  */}
              <div className="flex  ">
                <SeaExport />
                <SeaImport />
                <BarChart />
              </div>
            </div>
          )}

          {selectedTab === "Customer" && (
            <div>
              <div className="text-center text-2xl">
                <button className="py-3 px-20 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 mb-6">
                  Customer
                </button>
              </div>
              <Customer />
            </div>
          )}
          {selectedTab === "Enquiry" && (
            <div>
            <div className="text-center text-2xl">
                <button className="py-3 px-20 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 mb-6">
                  Enquiry
                </button>
              </div>
              <Enquiry />
            </div>
          )}
          {selectedTab === "Air" && (
            <div className="">
              {isAirTabActive && (
                <div className=" w-9/12 flex  mx-48 mb-10 items-center justify-center ">
                  {/* Air Import Button */}
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

                  {/* Air Export Button */}
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
              )}
              {activeAirTab === "Air Import" ? (
                <div>
                  <AirImportData />
                </div>
              ) : activeAirTab === "Air Export" ? (
                <div>
                  <AirExportData />
                </div>
              ) : null}
            </div>
          )}

          {selectedTab === "Sea" && (
            <>
              {isSeaTabActive && (
                <div className=" w-8/12 flex  mx-48 mb-10 items-center justify-center ">
                  {/* Sea Import Button */}
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

                  {/* Sea Export Button */}
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
              )}
              {activeSeaTab === "Sea Import" ? (
                <div>
                  <SeaInfo />
                </div>
              ) : activeSeaTab === "Sea Export" ? (
                <div>
                  <SeaExp />
                </div>
              ) : null}
            </>
          )}
          {selectedTab === "Opuscorner" && (
            <div>
              <Opuscorner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
