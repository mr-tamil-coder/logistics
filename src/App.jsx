import { useState } from 'react'
import React from 'react';
import SIGUP from './SIGUP';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <SIGUP/>
     
    </>
  )
}

export default App
