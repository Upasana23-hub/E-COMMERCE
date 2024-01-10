import React from 'react'
import './Slider.css';

export const Slider = () => {
  return (
    <div className='slider-div'>
      <div className='first_slider'>
        <div className='information'>
            <h1 className='Inf10'>Starting From ₹199</h1>
            <h3 className='Inf11'>Deals on Top Brands</h3>
            <h4 className='Inf12'>Free Delivery  </h4>
            <h4 className='Inf12'>  Latest Trend</h4>
            <div className='discout_banner'>
                <div className='bank_photo'>

                </div>
                <div className='bank_dis'>
                    <h3 className='dis'>10% discount on credit cards</h3>
                </div>
            </div>
        </div>
        <div className='photo'>
            <div className='photo1'>

            </div>
        </div>
      </div>
      
      <div className='second_slider'>
        <div className='information1'>
            <h1 className='Inf20'>Starting ₹149</h1>
            <h3 className='Inf21'>Daily Needs</h3>
                <h4 className='Inf22'>TOP DEALS  |   GREAT PRICES</h4>
        </div>
        <div className='photo2'>
            <div className='photo3'>

            </div>
        </div>
      </div>
    </div>
    
  )
}
