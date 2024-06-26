import React, { useEffect } from "react";
import "./Summary.css";
import { Link, useLocation } from "react-router-dom";

const Summary = () => {
  const location = useLocation();
  useEffect(() => {
      if (!location.hash) {
          window.scrollTo(0, 0);
      }
  }, [location]);

  return (
    <div className="outer-summary">
      <div className="inner-summary">
        <h2 className="title-">Shipping-address</h2> <br />
        <form className="summary-form">
          <div className="summary-inputBox">
            <label htmlFor="FirstName">First Name:</label><br/>
            <input type="text" placeholder="  enter your first name "></input>
          </div>
          <div className="summary-inputBox">
            <label htmlFor="LastName">Last Name:</label><br/>
            <input type="text" placeholder="  enter your last name "></input>
          </div>
          
          <div className="summary-inputBox">
            <label htmlFor="email">Email:</label><br/>
            <input type="email" placeholder="  example@gmail.com "></input>
          </div>
          <div className="summary-inputBox">
            <label htmlFor="Address">Address:</label><br/>
            <input type="text" placeholder="  room - street - locality "></input>
          </div>
          <div className="summary-inputBox-city">
            <label htmlFor="City">City:</label><br/>
            <input type="text" placeholder="  enter your city" className="city-input"></input>
          </div>

          
          <div className="summary-inputBox-state">
            <label htmlFor="State">State:</label><br/>
            <input type="text" placeholder="  enter your state " className="state-input"></input>
          </div>
          <div className="summary-inputBox-pin">
            <label htmlFor="Pin code">Pin Code:</label><br/>
            <input type="number" placeholder="  123456 " 
            min="0"
            max="9"
            onInput={(e) => e.target.value = e.target.value.slice(0, 6)}
            required className="pin-input"
            ></input>
          </div>
          <br/>

          <Link to="/Payment">
          <button type="submit" className='continue-btn'>
            
            Continue
            </button>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default Summary;
