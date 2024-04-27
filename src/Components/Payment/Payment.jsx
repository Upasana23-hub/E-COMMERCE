import React, { useEffect, useState } from 'react'
import './Payment.css';
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { MdPayment } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";

const Payment = () => {
  const [activeTab, setActiveTab] = useState('debit'); // State to manage active tab

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
    <>
    <div className="side-tab-box">
      <div className="payment-tabs">
        <h3 className='payment-tab-2' style={{color:'rgb(135, 135, 250)'}}>   Payment methods</h3>
        <br/><hr 
        style={{
            color: 'black',
            border: "1.5px solid rgb(49, 13, 158)",
        }}
        />
        <div
          className={`payment-tab ${activeTab === 'debit' ? 'active' : ''}`}
          onClick={() => handleTabClick('debit')}
        >
        <div style={{display:'flex', marginTop:10}} className='debit-head'>
        <div className='icon-debit-card'><MdPayment /></div> <p className='p-debit'>Debit / Credit card</p>
        </div>
        </div>
        <div
          className={`payment-tab ${activeTab === 'upi' ? 'active' : ''}`}
          onClick={() => handleTabClick('upi')}
        >
         <div style={{display:'flex'}} className='upi-head-1'>
         <img src='https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png' alt='' height={30} width={30} className='upi-logo'/> <p className='p-upi'>UPI / Phone No</p>
         </div>
        </div>
        <div className='hr-2'>
        <hr 
        style={{
            marginTop: 20,
            border: "1.5px solid rgb(49, 13, 158)",
        }}
        />
        </div>
      </div>
      <div className="payment-tab-content">
        {activeTab === 'debit' && <div>
          <div className="debit_cards">
            <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visa-icon.png' alt=''className='image-visa'/>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-mastercard-10-226450.png' alt='' height={80} width={90}/>
            <img src='https://logowik.com/content/uploads/images/amex-card1708.jpg' alt='' height={85} width={100}/>
            <img src='https://cdn.freelogovectors.net/wp-content/uploads/2023/09/discover-card-logo-freelogovectors.net_.png' alt='' height={80} width={100}/>

          </div>
          <hr style={{
            color: 'black',
            border: "2px solid rgb(35, 34, 34)",
        }}/>
        <div className='debit-details'>
          <div className='debit-inner'>
            <h5 className='debit-names'>Card Number</h5>
            <div className='form-card'>
            <input
            className='input-card'
            type='text'
            placeholder='  eg: 1234 5678 9012 3456'
            required
            maxLength={19}
            />
            <div className='icon-card'><MdPayment height={200} width={200} color='rgb(135, 135, 250)'/></div>
            </div>
            <div className='date-cvv'>
              <div className='debit-expiry'>
              <h5 className='debit-names'>Expiry Date</h5>
              <div className='form-mm-yy'>
              <input
                className='input-month'
                type='text'
                placeholder='MM'
                required
                maxLength={2}
                />
                /
                <input
                className='input-year'
                type='text'
                placeholder='YY'
                required
                maxLength={2}
                />
              </div>
              </div>
              <div className='debit-cvv'>
                <h5 className='debit-names'>CVV</h5>
                <div className='form-cvv'>
                  <input
                      className='input-cvv'
                      type='text'
                      placeholder='CVV'
                      required
                      maxLength={3}
                      />
                  <div className='icon-cvv'><FaQuestionCircle color='rgb(135, 135, 250)'/></div>
                </div>
              </div>
            </div>
            <div className='acc-name-div'>
              <h5 className='debit-names'>Name</h5>
              <input
                className='input-name'
                type='text'
                placeholder='    Account Holder Name'
                required
                />
            </div>
            <button className='pay-now'><span className='pay-now-span'></span>PAY NOW</button>
          </div>
          </div>
          </div>}
          {activeTab === 'upi' && <div>
          <div className="upi_cards">
            <img src='https://i.pinimg.com/originals/db/42/53/db4253052cfc0f80ac281486c19f9d57.png' alt='' height={78} width={100} className='image-phonepe'/>
            <img src='https://i.pinimg.com/originals/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.png' alt='' height={90} width={90}/>
            <img src='https://assetscdn1.paytm.com/images/catalog/view/305388/1707892437147.png' alt='' height={90} width={100}/>
            <img src='https://cdn.iconscout.com/icon/free/png-256/free-bhim-3-69845.png' alt='' height={80} width={100}/>

          </div>
          <hr style={{
            color: 'black',
            border: "2px solid rgb(35, 34, 34)",
        }}/>
            <div className='upi-full-page'>
              <div className='upi-inner'>
                <div className="upi-inner-up">
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-upi-2085056-1747946.png' alt='' 
                className='upi-logo-1'/>
                <h5 className='upi-head'>Choose an option</h5>
                </div>
                <div className='phonepe-div'>
                <input type='radio' name='phonepe' style={{marginLeft:-20, marginTop:30}}/>
                  <h5 className='upi-phonepe'>PhonePe</h5>
                  <div className='form-phonepe'>
                  <input
                  className='input-phonepe'
                  type='text'
                  placeholder='Enter Phone no +91'
                  />
                  <p className='verify-p'>VERIFY</p>
                  </div>
                </div>
                <p className='or-p'>OR</p>
                <div className='upi-div'>
                  <input type='radio' name='phonepe' style={{marginLeft:-20, marginTop:30}}/>
                <h5 className='upi-id'>Your UPI ID</h5>
                  <div className='form-id'>
                  <input
                  className='input-id'
                  type='text'
                  placeholder='Enter UPI ID'
                  />
                  <p className='verify-p'>VERIFY</p>
                  
                  </div>
                  <button className='pay-now-2'><span className='pay-now-span-2'></span>PAY NOW</button>
                </div>
              </div>
            </div>
        </div>}
      </div>
      </div>
    </>
  )
}

export default Payment
