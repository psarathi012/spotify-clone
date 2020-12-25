
import './App.css';
import React, { useEffect } from "react";
import Login  from './components/Login';
import { getTokenFromResponse } from "./components/spotify";

function App() {
  
  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    console.log(hash,"helllllo");
    window.location.hash = "";
    

  });

  return (
    <div className="app"> 
    <Login/>
  
    </div>
  );
}

export default App;
