import React, { useState } from 'react';
import './Nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  // State for search input
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit =(e)=>{
   e.preventDefault();
   navigate(`/Another?search=${searchTerm}`)
  }
  return (
    <nav className='outer-div'>
      <Link to="/"><div className='name' >
           <img src='SHOPEE.png' alt='name' className='logo'/>
          <div className='heading'>SHOPEE</div>
      </div>
      </Link>

      <form 
        onSubmit={handleSubmit}
        className="search-bar">
        <input className='search'
        
          type="text"
          placeholder="Search for products...."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
        
        <button className='search-button'>
        <i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} ></i>
        </button>
        
      </form>

    <Link to="/account">
      <div className="dropdown">
        <div className='dropdown-list' >
        <i className="fa-solid fa-user"></i>
        &nbsp;
            My Account
        </div>
      </div>
      </Link>
      <Link to="/wishlist">
      <div className='wishlist'>
      <i className="fa-solid fa-heart" ></i>
      &nbsp;
      <p>Wishlist</p>
      </div>
      </Link>
      <Link to="/Cart">
      <div className='cart-button'>
      <i className="fa-solid fa-cart-shopping"></i>
      &nbsp;
      <p>Cart</p>
      </div>
      </Link>
      
    </nav>
  );
};

export default Nav;