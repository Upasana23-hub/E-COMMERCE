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
                <div className="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Address: XYZ, New Delhi, India. Pin Code:110051</p>
                  </div>
                  <hr className="hr2"/>
                  <div className="phone">
                  <i class="fa-solid fa-phone"></i>
                  <p>Phone: 8976297534</p>
                  </div>
                  <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <p>Email: contact@shopee.com</p>
                  </div>
                  <div className="connect">
                  </div>
                </div>
                <div className="footer5">
                  <h3>SOCIAL</h3>
                  <div className="social">
                  <a href="hgg"><i class="fa-brands fa-facebook" ></i></a>
                  <a href="hgg"><i class="fa-brands fa-instagram" ></i></a>
                  <a href="hgg"><i class="fa-brands fa-youtube" ></i></a>
                  <a href="gjhg"><i class="fa-brands fa-twitter"></i></a>
                  </div>
                  <br/><br/>
                  <div className="newsletter"> 
                    <input type="text" className="news"/>
                    <button>Subscribe</button>
                  </div>
                </div>
            </div>
            <hr className="hr1"/>
            <div className="footer-lower">
              <p> &copy; <em id="date"></em>2024 Shopee, All Right Reserved.</p>
            </div>
        </div>
        </>
    )
}
export default Footer;