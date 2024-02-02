import React from 'react'
import './smallSlider.css'
// import { Data } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
export const Small = () => {
  return (
    <>
    <div className='full-slider-div'>
    <div className='up_info_div'>
        Up to 60% off | Car & bike accessories & more
    </div>
    <div className='Slider_div2'>
    
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        >

        <SwiperSlide>
            <div  className="first_pic">
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="second_pic">
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="third_pic">
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="fourth_pic">
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="fifth_pic">
                
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="sixth_pic">
                
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="seventh_pic">
              
            </div>
            </SwiperSlide> 
        <SwiperSlide>
            <div className="eightth_pic">
                
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="nineth_pic">
                
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="tenth_pic">
                
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="eleventh_pic">
                
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="twelveth_pic">
                
            </div>
            </SwiperSlide>

      </Swiper>
    </div>
    </div>
    </>
  )
}
