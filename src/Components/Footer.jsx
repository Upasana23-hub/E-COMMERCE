import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <>
        <div className="footer-outer">
            <div className="footer-upper">
                <div className="footer1">
                <Link to='/'>
                  <div className='shopee' >
                    <img src='SHOPEE.png' alt='name' className='logo' />
                    <div className='heading'>SHOPEE</div>
                  </div>
                  </Link>
                  <p className="line">India's First Choice</p>
                </div>
                <div className="footer2">
                  <h3 className="heading-footer">CATEGORIES</h3>
                  <ul>
                    <li><Link to="/Another?search=men">Men</Link></li>
                    <li><Link to="/Another?search=women">Women</Link></li>
                    <li><Link to="/Another?search=teddy dress">Kids</Link></li>
                    <li><Link to="/Another?search=shoe">Footwear</Link></li>
                    <li><Link to="/Another?search=winter">Winterwear</Link></li>
                    <li><Link to="/Another?search=electronics">Electronics</Link></li>
                    <li><Link to="/Another?search=watch">Watches</Link></li>
                    <li><Link to="/Another?search=bag">Bags</Link></li>
                  </ul>
                </div>
                <div className="footer3">
                <h3 className="heading-footer">INFORMATIONS</h3>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/terms">Term and Condition</Link></li>
                    <li><Link to="/Return">Return and Exchange</Link></li>
                    <li><Link to="/Shipping">Shipping and Delivery</Link></li>
                    <li><Link to="/Privacy">Privacy Policy</Link></li>
                  </ul>
                </div>
                <div className="footer4">
                <h3 className="heading-footer">CONTACT</h3>
                <div className="address">
                  <i className="fa-solid fa-location-dot"></i>
                  <p>Address: XYZ, New Delhi, India. Pin Code:110051</p>
                  </div>
                  <hr className="hr2"/>
                  <div className="phone">
                  <i className="fa-solid fa-phone"></i>
                  <p>Phone: 8976297534</p>
                  </div>
                  <div className="email">
                  <i className="fa-solid fa-envelope"></i>
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
            <div className='footer-list'>
              <ol>
                <li><Link to="/"><i class="fa-solid fa-house"></i><br/> Home</Link></li>
                <li><Link to="/account"><i class="fa-solid fa-user" ></i><br/> You</Link></li>
                <li><Link to="/wishlist"><i class="fa-solid fa-heart" ></i> <br/>Wishlist</Link></li>
                <li><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i><br/> Cart</Link></li>
                <li><Link to="/About"><i class="fa-solid fa-bars"></i><br/> About</Link></li>
              </ol>
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