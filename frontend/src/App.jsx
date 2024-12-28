import { useState, useEffect } from "react";
import React from "react";
import Signup from "./Components/Signup";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import UploadDoc from "./Components/UploadDoc";
import CustomerDocuments from "./Components/CustomerDocuments";
import ForgetPwd from "./Components/ForgetPwd";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }

        const response = await axios.get('http://localhost:5000/overview/verify-auth', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setIsAuthenticated(response.status === 200);
      } catch (error) {
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
      } finally {
        setIsLoading(false);
      }
    };

    verifyAuth();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login setAuthenticated={setIsAuthenticated} />} />
        <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        {/* <Route path="/a" element={<UploadDoc />} /> file upload */}
        {/* <Route path="/b" element={<CustomerDocuments />} file retrieve */}
        <Route path="/for" element={<ForgetPwd />} />
        {/* Protected Routes */}
        <Route
          path="/overview"
          element={isAuthenticated ? <Overview /> : <Navigate to="/login" />}
        />
        <Route
          path="/customer"
          element={isAuthenticated ? <Customer /> : <Navigate to="/login" />}
        />
        <Route
          path="/enquiry"
          element={isAuthenticated ? <Enquiry /> : <Navigate to="/login" />}
        />
        <Route
          path="/sea"
          element={isAuthenticated ? <SeaImport /> : <Navigate to="/login" />}
        />
        <Route
          path="/seaexport"
          element={isAuthenticated ? <SeaExp /> : <Navigate to="/login" />}
        />
        <Route
          path="/reports"
          element={isAuthenticated ? <Report /> : <Navigate to="/login" />}
        />
        <Route
          path="/opuscorner"
          element={isAuthenticated ? <Opuscorner /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
