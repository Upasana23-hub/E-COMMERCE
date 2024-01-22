import React from "react";
import { Slider } from "./Components/Slider";
import Footer from "./Components/Footer";
import Homecard from "./Components/Homecard";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Product from "./Components/Product";

function App() {
  return (
    
    <div className="App">
      <>
      <Nav/>
      <Product/>

      <Slider/>
      <Homecard/>
      <Footer/>
      
      </>
      
    </div>
  );
}

export default App;

