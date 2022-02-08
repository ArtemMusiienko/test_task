import React from "react";
import { useState} from "react";
import Login from "./Login";
import Register from "./Register";
import "./App.css"

function App() {
  const [isLoginOpen, setIsLoginOpen]= useState(false)
  const [isRegisterOpen, setIsRegisterOpen]= useState(false)
  const willOpenLogin=()=>{
    setIsLoginOpen(true)
    setIsRegisterOpen(false)
  }
   const willRegisterOpen =()=>{
   setIsRegisterOpen(true)
   setIsLoginOpen(false)
   }
  
   return (
     <div className="main-container">
    <div className="App">
    <button className="nav"onClick={willOpenLogin}>Login</button>
     <button className="nav" onClick={willRegisterOpen}>Register</button> 
     </div>
     <div className="container">
     {isLoginOpen&&<Login/>}
     {isRegisterOpen&&<Register/>}
     </div>
     </div>
   
  );
}

export default App;
