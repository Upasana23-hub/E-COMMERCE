import React from "react";
import { Slider } from "./Components/Slider";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Product from "./Components/Product";

function App() {
  return (
    
    <div className="App">
      <>
      <Nav/>
      <Product/>

      <Slider/>
      <Footer/>
      
      </>
      
    </div>
  );
}

export default App;

