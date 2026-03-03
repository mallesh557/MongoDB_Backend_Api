import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    const fetchData=async()=>{
      const response=await fetch("https://mongodb-backend-api.onrender.com/users");
      const data=await response.json();
      console.log(data);
    }
    fetchData();
  })
  return(
    <div className="App">
      <h1>MongoDB Backend API</h1>
    </div>
  )
}

export default App
