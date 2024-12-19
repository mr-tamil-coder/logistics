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
      {console.log("d" + activeSeaTab)}
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
              {/* Air Charts */}
              <div className="flex  ">
                <AirImportChart />
                <AirExportChart />
              </div>

              {/* Sea Charts  */}
              <div className="flex  justify-start items-center flex-wrap ">
                <SeaImport />
                <SeaExport />
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
            <>
              {activeAirTab === "Air Import" ? (
                <div>
                  <AirImportData />
                </div>
              ) : activeAirTab === "Air Export" ? (
                <div>
                  <AirExportData />
                </div>
              ) : null}
            </>
          )}

          {selectedTab === "Sea" && (
            <>
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
              <Opuscorner/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overview;
