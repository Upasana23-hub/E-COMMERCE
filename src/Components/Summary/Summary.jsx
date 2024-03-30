import React, { useEffect } from "react";
import "./Summary.css";
import { useLocation } from "react-router-dom";

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
            <input type="text" placeholder="  example@gmail.com "></input>
          </div>
          <div className="summary-inputBox">
            <label htmlFor="Address">Address:</label><br/>
            <input type="text" placeholder="  room - street - locality "></input>
          </div>
          <div className="summary-inputBox">
            <label htmlFor="City">City:</label><br/>
            <input type="text" placeholder="  enter your city"></input>
          </div>

          
          <div className="summary-inputBox">
            <label htmlFor="State">State:</label><br/>
            <input type="text" placeholder="  enter your state "></input>
          </div>
          <div className="summary-inputBox">
            <label htmlFor="Pin code">Pin Code:</label><br/>
            <input type="text" placeholder="  123456 "></input>
          </div>
          <br/>
          <button type="submit" className='continue-btn'>Continue</button>

        </form>
      </div>
    </div>
  );
};

export default Summary;
