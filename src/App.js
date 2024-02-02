import React from "react";

import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Another from "./Pages/Products/Another";
import Single from "./Pages/Products/Single";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav/> 
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Another:id" element={<Another/>}/>
        <Route path="/Single:Name" element={<Single/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;