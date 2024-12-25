import { useState, useEffect } from "react";
import React from "react";
import Signup from "./Components/Signup";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./Components/Overview";
import Sidebar from "./Components/SideBar";
import Customer from "./Components/Customer";
import Enquiry from "./Components/Enquiry";
import Forget from "./Components/Forget";
import SeaImport from "./Components/SeaInfo";
import SeaExp from "./Components/SeaExp";
import Report from "./Components/Report";
import Opuscorner from "./Components/Opuscorner";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isApiAvailable, setApiAvailable] = useState(false);
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route
          path="/login"
          element={
            <Login
              setAuthenticated={setAuthenticated}
              setApiAvailable={setApiAvailable}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />

        {/* Conditional API-Dependent Routes */}
        {!isAuthenticated && !isApiAvailable ? (
          <Route
            path="*"
            element={<h1>Login to access this page.</h1>}
          />
        ) : (
          <>
            <Route path="/overview" element={<Overview />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/sea" element={<SeaImport />} />
            <Route path="/seaexport" element={<SeaExp />} />
            <Route path="/reports" element={<Report />} />
            <Route path="/opuscorner" element={<Opuscorner />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
