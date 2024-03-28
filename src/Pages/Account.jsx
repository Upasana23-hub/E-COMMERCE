import React, { useEffect, useState } from 'react';
import './Account.css'; // import your CSS file for styling
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile'); // State to manage active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

  return (
    <div className="side-tab-container">
      <div className="tabs">
        <h3 className='tab-2'><i class="fa-solid fa-user"></i>   MY ACCOUNT</h3>
        <div
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => handleTabClick('profile')}
        >
          Profile
        </div>
        <div
          className={`tab ${activeTab === 'address' ? 'active' : ''}`}
          onClick={() => handleTabClick('address')}
        >
          Manage Addresses
        </div>
        <div
          className={`tab ${activeTab === 'cards' ? 'active' : ''}`}
          onClick={() => handleTabClick('cards')}
        >
          Saved Cards
        </div>
        <hr className='hr'/>
        <h3 className='tab-2'> <i class="fa-solid fa-bag-shopping"></i> ORDERS</h3>
        <div
          className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => handleTabClick('orders')}
        >
          Orders
        </div>
        <div
          className={`tab ${activeTab === 'returns' ? 'active' : ''}`}
          onClick={() => handleTabClick('returns')}
        >
          Returns
        </div>
        <hr className='hr'/>
        <h3 className='tab-2'><i class="fa-solid fa-gift"></i> CREDITS</h3>
        <div
          className={`tab ${activeTab === 'coupons' ? 'active' : ''}`}
          onClick={() => handleTabClick('coupons')}
        >
          Coupons
        </div>
        <div
          className={`tab ${activeTab === 'credits' ? 'active' : ''}`}
          onClick={() => handleTabClick('credits')}
        >
          Shopee Credits
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 'profile' && <div>
            <h3>Personal Informations</h3>
              <div className='profile-name'>
                <div className='profile-first-name'><p>First Name</p></div>
                <div  className='profile-last-name'><p>Last Name</p></div>
              </div>
              {/* <p className='profile-email'>Email Address</p> */}
              <h3 className='profile-heading'>Email Address</h3>
              <div className='profile-name'>
                <div  className='profile-email'><p>Email Address</p></div>
              </div>
              <h3 className='profile-heading'>Mobile Number</h3>
              <div className='profile-name'>
                <div className='profile-email'><p>Mobile Number</p></div>
              </div>
              <br/><br/>
            <h3 className='profile-faq'>FAQs</h3>
            <b><p>What happens when I update my email address (or mobile number)?</p></b>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <br/>
            <b><p>What happens to my existing Shopee account when I update my email address (or mobile number)?</p></b>
            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
            <br/>
            <b><p>Does my Seller account get affected when I update my email address?</p></b>
            <p>Shopee has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
          </div>}
        {activeTab === 'address' && <div>
          <h3>Manage Addresses</h3>
          <Link to='/signup'><div className='new-address'>+ ADD NEW ADDRESS</div></Link>
          <div className='address-old'>
            Address
          </div>
        </div>}
        {activeTab === 'cards' && <div>
            <h3>Manage Saved Cards</h3>
            <br/><br/>
            <h3>FAQs</h3>
            <br/>
            <b><p>Why is my card being tokenised?</p></b>
            <p className='faq-ans'>As per the new RBI guidelines to make card data more secure, merchants like Shopee cannot store the card details of users. As an alternative, RBI has authorised card networks and card issuers to offer card tokenisation services, which means the replacement of actual credit and debit card details with an alternate code called “token”. The user can either choose to tokenise their card by giving consent for future transactions or choose to continue without tokenisation.</p>
            <br/>
            <b><p>What is a token?</p></b>
            <p className='faq-ans'>A token is generated when a user gives consent to Shopee to tokenise their card. A token is a unique value for a combination of card, token requestor (Shopee is a token requestor & accepts request from the customer for tokenisation of a card and passes it onto the card network to issue a corresponding token) and device. The token does not contain any personal information linked to your card and is generated only when a customer uses a new card for a successful transaction on Shopee.</p>
            <br/>
            <b><p>Is it safe to tokenise my card?</p></b>
            <p className='faq-ans'>Yes. A tokenised card transaction is considered safer as the actual card details are not shared with the Shopee during transaction processing . Card information is stored with the authorised card networks or card issuers only and Shopee does not store your 16-digit card number.</p>
            <br/>
            <b><p>Is tokenisation of card mandatory?</p></b>
            <p className='faq-ans'>No, customer can choose whether or not to tokenise their card.</p>
            <br/>
            <b><p>What happens if I don’t give consent to secure my card?</p></b>
            <p className='faq-ans'>If you don’t give consent to tokenise your card, you need to enter your card details for every transaction as stipulated under the RBI guidelines</p>
        </div>}
        {activeTab === 'orders' && <div>
            No Orders Till Now.
        </div>}
        {activeTab === 'returns' && <div>
            No Returns Till Now.
        </div>}
        {activeTab === 'coupons' && <div>You have no couponss yet, start shopping!</div>}
        {activeTab === 'credits' && <div>You have no credit points yet, start shopping!</div>}
      </div>
    </div>
  );
};

export default Account;
