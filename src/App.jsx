import { useState } from 'react'
import React from 'react';
import Signup from './Components/Signup';
import './App.css'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
         


     
    </>
  )
}

export default App
