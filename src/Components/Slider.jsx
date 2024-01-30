import React from 'react'
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import "swiper/css/scrollbar";
 const Slider = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Autoplay, Navigation]}
    className="mySwiper"
    >
      <SwiperSlide>
      <div className='fourth_slider'>
        <div className='photo6'>
            <div className='photo7'>

            </div>
        </div>
        <div className='information3'>
            <h1 className='Inf40'>WINTER FEST</h1>
            <h2 className='Inf41'><i>40-70% OFF</i></h2>
                <h4 className='Inf42'>HOTTEST WINTER STYLES!</h4>
        </div>
      </div>
        
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
      <div className='third_slider'>
        <div className='photo4'>
            <div className='photo5'>

            </div>
        </div>
        <div className='information2'>
            <h1 className='Inf30'>Up to 80% off</h1>
            <h3 className='Inf31'>Frangrance for</h3>
            <h3 className='Inf32'>Every Ocassion</h3>
            <div className='discout_banner1'>
                <div className='bank_photo1'>

                </div>
                <div className='bank_dis1'>
                    <h3 className='dis1'>10% discount on any cards</h3>
                </div>
            </div>
        </div>
        
      </div>
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
      <div className='fifth_slider'>
        <div className='photo8'>
        </div>
        <div className='information4'>
            <h1 className='Inf50'><i>GET FIT IN STYLE.</i></h1>
            <h2 className='Inf51'>2024 COLLECTION</h2>
                <h6 className='Inf52'>UP TO 30% OFF*</h6>
                <button><span></span>BUY NOW</button>
        </div>
      </div>
      </SwiperSlide>
    </Swiper>
    
  )
}

export default Slider;
