import { useState } from 'react'
import React from 'react';
import SIGUP from './Components/SIGUP';
import './App.css'
import Login from './Components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
          <SIGUP/>
          <Login />
     
    </>
  )
}

export default App
