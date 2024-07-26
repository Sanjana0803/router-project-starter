import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from   "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import DashBoard from "./pages/Dashboard"
import Home from "./pages/Home"
import { useEffect, useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const[isLoggedIn,setIsLoggedIn]=useState(false);

  return (
  <div className="w-screen h-screen bg-richblack-900 flex-col">
      <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
     <Routes>

       <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
       <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
       <Route path="/dashboard" element={
        
      <PrivateRoute isLoggedIn={isLoggedIn}>

        <DashBoard/>
        
      </PrivateRoute>
       } />
      
       </Routes>
      

       </BrowserRouter>


  </div>
  )
}

export default App;
