import React, { useState } from 'react';
import './Nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
const Nav = () => {
  // State for search input
  const [searchTerm, setSearchTerm] = useState('');

  // State for dropdown selection
  const [selectedOption, setSelectedOption] = useState('');

  // Options for the dropdown
  const dropdownOptions = ['Profile', 'Orders', 'Wishlist', 'Customer Service'];
 

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle dropdown selection change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <nav className='outer-div'>
      <div className='name'>
           <img src='SHOPEE.png' alt='name' className='logo'/>
          <div className='heading'>SHOPEE</div>
      </div>

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
        <select value={selectedOption} onChange={handleDropdownChange} className='dropdown-list'>
          <option value="" disabled >
            <p>My Account</p>
          </option>
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <button className='wishlist'>
      <i className="fa-solid fa-heart"></i>
      <p>Wishlist</p>
      </button>
      <button className='cart-button'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p>Cart</p>
      </button>
      
    </nav>
  );
};

export default Nav;
