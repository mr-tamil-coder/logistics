import { useState } from "react";
import React from "react";
import Signup from "./Components/Signup";
import "./App.css";
import Login from "./Components/login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Overview from "./Components/Overview";
import Sidebar from "./Components/SideBar";
import Customer from "./Components/Customer";
import Enquiry from "./Components/Enquiry";
// import Air from "./Components/Air";
import Forget from "./Components/Forget";
import AirExportData from "./Components/AirexportData";
import AirImportData from "./Components/AirImportData";
import SeaImport from "./Components/SeaInfo";
import AirImportChart from "./Components/Charts/AirImportChart";
import SeaExp from "./Components/SeaExp";
import Report from "./Components/Report";
import Opuscorner from "./Components/Opuscorner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/enquiry" element={<Enquiry />} />
         
          <Route path="/sea" element={<SeaImport />} />
     
          <Route path="/reports" element={<Report/>} />
      
          

          {/* <Route path="/airexport" element={<Airexport />} /> */}
          <Route path="/forget" element={<Forget />} />
          <Route path="/seaexport" element={<SeaExp/>} />
          <Route path="/opuscorner" element={<Opuscorner/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
