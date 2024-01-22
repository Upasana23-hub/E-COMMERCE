import React from "react";
import './Footer.css'
const Footer = () => {
    return(
        <>
        <div className="footer-outer">
            <div className="footer-upper">
                <div className="footer1">
                  <div className='shopee' >
                    <img src='SHOPEE.png' alt='name' className='logo'/>
                    <div className='heading'>SHOPEE</div>
                  </div>
                  <p className="line">India's First Choice</p>
                </div>
                <div className="footer2">
                  <h3 className="heading-footer">CATEGORIES</h3>
                  <ul>
                    <li><a href="Home.jsx">Men</a></li>
                    <li><a href="Home.jsx">Women</a></li>
                    <li><a href="Home.jsx">Kids</a></li>
                    <li><a href="Home.jsx">Footwear</a></li>
                    <li><a href="Home.jsx">Winterwear</a></li>
                    <li><a href="Home.jsx">Electronics</a></li>
                    <li><a href="Home.jsx">Watches</a></li>
                    <li><a href="Home.jsx">Bags</a></li>
                  </ul>
                </div>
                <div className="footer3">
                <h3 className="heading-footer">INFORMATIONS</h3>
                  <ul>
                    <li><a href="Home.jsx">Home</a></li>
                    <li><a href="Home.jsx">About Us</a></li>
                    <li><a href="Home.jsx">Contact Us</a></li>
                    <li><a href="Home.jsx">Term and Condition</a></li>
                    <li><a href="Home.jsx">Return and Exchange</a></li>
                    <li><a href="Home.jsx">Shipping and Delivery</a></li>
                    <li><a href="Home.jsx">Privacy Policy</a></li>
                  </ul>
                </div>
                <div className="footer4">
                <h3 className="heading-footer">CONTACT</h3>
                </div>
                <div className="footer5"></div>
            </div>
            <hr className="hr1"/>
            <div className="footer-lower">
              <p></p>
            </div>
        </div>
        </>
    )
}
export default Footer;