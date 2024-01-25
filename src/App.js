import React from "react";
import { Slider } from "./Components/Slider";
import Footer from "./Components/Footer";
import Homecard from "./Components/Homecard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
import { Data } from "./Components/Data";
import { useEffect, useState } from "react";
import {Card} from "./Components/Card";
import Nav from "./Components/Nav";
import Product from "./Components/Product";

function App() {
  const [category, setcategory] = useState([]);
  useEffect(() =>{
    filter("");
  },[]);
  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setcategory(filtered);
  };
  return (
    <Router>
    <div className="App">
      <>
      <Nav/>
      <Product/>
      <Slider/>
      <Homecard/>
      <Routes>
        <Route path="/" element={
          <>
            
          <div style={{display:'flex',flexWrap: "wrap"}}>
            {category.map((item) => (
            <Card
              image={item.image}
              Name={item.Name}
              about={item.about}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
            />
            ))}
            </div>
          </>
        }
      />
      
      </Routes>
      <Footer/>
      
      </>
      
    </div>
    </Router>
  );
}

export default App;

