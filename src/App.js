import React from "react";

import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Another from "./Pages/Products/Another";
import Single from "./Pages/Products/Single";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Privacy from "./Pages/Privacy"
import Return from "./Pages/Products/return";
import Terms from "./Pages/terms"
import Shipping from "./Pages/Shipping";
function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav/> 
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Another:id" element={<Another/>}/>
        <Route path="/Single:name" element={<Single/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/Shipping" element={<Shipping/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;