import React from "react";
import Nav from "./Components/Nav";
import { Slider } from "./Components/Slider";
import Footer from "./Components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
function App() {
  return (
    
    <div className="App">
      <>
      <Nav/>
      {/* <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter> */}
      <Slider/>
      <Footer/>
      
      </>
      
    </div>
  );
}

export default App;

