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
import Return from "./Pages/Products/Return";
import Terms from "./Pages/terms"
function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav/> 
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Another" element={<Another/>}/>
        <Route path="/Single:name" element={<Single/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Return" element={<Return/>}/>
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;