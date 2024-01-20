import React, { useState } from 'react';
import './Nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Nav = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // State for dropdown selection
  // const [selectedOption, setSelectedOption] = useState('');

  // Options for the dropdown
  // const dropdownOptions = ['Profile', 'Orders', 'Customer Service'];
 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <nav className='outer-div'>
      <button className='name' >
           <img src='SHOPEE.png' alt='name' className='logo'/>
          <div className='heading'>SHOPEE</div>
      </button>

      <div className="search-bar">
        <input className='search'
          type="text"
          placeholder="Search for products...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className='search-button'>
        <i class="fa-solid fa-magnifying-glass" style={{color: "#ffffff",}} ></i>
        </button>
      </div>

      <div className="dropdown">
        <button className='dropdown-list'>
        <i class="fa-solid fa-user"></i>
        &nbsp;
            My Account
        </button>
      </div>
      <button className='wishlist'>
      <i className="fa-solid fa-heart"></i>
      &nbsp;
      <p>Wishlist</p>
      </button>
      <button className='cart-button'>
      <i className="fa-solid fa-cart-shopping"></i>
      &nbsp;
      <p>Cart</p>
      </button>
      
    </nav>
  );
};

export default Nav;
