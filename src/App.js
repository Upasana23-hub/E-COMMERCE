import React from "react";

import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Another from "./Pages/Products/Another";
import Single from "./Pages/Products/Single";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Privacy from "./Pages/Privacy"
import Return from "./Pages/Products/Return";
import Terms from "./Pages/terms"
import Shipping from "./Pages/Shipping";
import Account from "./Pages/Account";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";
// import Searchitem from "./Components/Searchitem/Searchitem";
function App() {
  
  return (
    <Router>
    <div className="App">
      <Nav/> 
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Another" element={<Another/>}/>
        {/* <Route path="/search/:term" element={<Searchitem/>}/>  */}
        <Route path="/Single/:id" element={<Single/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/return" element={<Return/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/Shipping" element={<Shipping/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;