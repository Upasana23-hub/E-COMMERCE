import React from "react";
import './Home_card.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
const Homecard = () => {
    return(
        <Link to="/Another:id">
        <div className="card_outer">
            <div className="first_card">
                <div className="instr">
                    <h3>Applications for your home | Up to 50% off</h3>
                </div>
                <div className="pic">
                    <div className="up_pics">
                        <Link to="/Another?search=air+conditioner">
                        <div className="pic1">
                            <div className="p1">

                            </div>
                            <p className="style">Air Conditioner</p>
                        </div>
                        </Link>
                        <div className="pic2">
                            <div className="p2">

                            </div>
                            <p className="style">Refrigerators</p>
                        </div>
                    </div>
                    <div className="dwn_pics">
                        <div className="pic3">
                            <div className="p3">
                                
                            </div>
                            <p className="style">Microwave</p>
                        </div>
                        <div className="pic4">
                            <div className="p4">

                            </div>
                            <p className="style">Washing machine</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_card">
            <div className="instr">
                    <h3>Baby essentials & toys | Barnds & more</h3>
                </div>
            <div className="pic">
                    <div className="up_pics">
                        <div className="pic1">
                            <div className="p5">

                            </div>
                            <p className="style">Diapers & Wipes</p>
                        </div>
                        <div className="pic2">
                            <div className="p6">

                            </div>
                            <p className="style">Baby Cardels & more</p>
                        </div>
                    </div>
                    <div className="dwn_pics">
                        <div className="pic3">
                            <div className="p7">

                            </div>
                            <p className="style">Soft Toys and Indoor games</p>
                        </div>
                        <div className="pic4">
                            <div className="p8">

                            </div>
                            <p className="style">40% off | little Bags</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third_card">
            <div className="instr">
                    <h3>Starting ₹99 | All your home improvement needs</h3>
                </div>
            <div className="pic">
                    <div className="up_pics">
                        <div className="pic1">
                            <div className="p9">

                            </div>
                            <p className="style">Spin mops, wipes & more</p>
                        </div>
                        <div className="pic2">
                            <div className="p10">

                            </div>
                            <p className="style">Bathroom handware & accessories</p>
                        </div>
                    </div>
                    <div className="dwn_pics">
                        <div className="pic3">
                            <div className="p11">

                            </div>
                            <p className="style">Hammers, screwdrivers & more</p>
                        </div>
                        <div className="pic4">
                            <div className="p12">

                            </div>
                            <p className="style">Up to 70% off | Extension Boards</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fourth_card">
            
            </div>
        </div>

        <div className="slider_outer">
            <div className="info_div">
                Today's Deals
            </div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
        >

        <SwiperSlide>
        <Link to="/Another:id">
            <div className="first_div">
                <div className="sli1">

                </div>
                <p className="dis_red">Up to 78% off</p>
                <p className="under_dis">Best Deals on Sports Shoes</p>
            </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
            <div className="second_div">
                <div className="sli2">

                </div>
                <p className="dis_red">Up to 68% off</p>
                <p className="under_dis">Full leather Bags</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
        <Link to="/Another?search=shoe">
            <div className="third_div">
                <div className="sli3">

                </div>
                <p className="dis_red">Up to 50% off</p>
                <p className="under_dis">Branded Shoes</p>
            </div>
            </Link>
            </SwiperSlide>
        <SwiperSlide>
            <div className="fourth_div">
                <div className="sli4">

                </div>
                <p className="dis_red">Up to 90% off</p>
                <p className="under_dis">Amazing best deals on tshirts</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/* <Link to="/Another:id"> */}
            <div className="fifth_div">
                <div className="sli5">

                </div>
                <p className="dis_red">Up to 25% off</p>
                <p className="under_dis">Electronics Accessories</p>
            </div>
            {/* </Link> */}
            </SwiperSlide>
        <SwiperSlide>
            <div className="sixth_div">
                <div className="sli6">

                </div>
                <p className="dis_red">Starting from ₹99</p>
                <p className="under_dis">Best offers on travel accessories</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="seventh_div">
                <div className="sli7">

                </div>
                <p className="dis_red">Starting from ₹199</p>
                <p className="under_dis">Latest Kurties</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="eightth_div">
                <div className="sli8">

                </div>
                <p className="dis_red">Up to 68% off</p>
                <p className="under_dis">Formal Shoes</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="nineth_div">
                <div className="sli9">

                </div>
                <p className="dis_red">Up to 50% off</p>
                <p className="under_dis">Best Deal on Tiffin Boxes</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className="tenth_div">
                <div className="sli10">

                </div>
                <p className="dis_red">Up to 90% off</p>
                <p className="under_dis">Amazing Deals on Accessories</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="eleventh_div">
                <div className="sli11">

                </div>
                <p className="dis_red">Up to 25% off</p>
                <p className="under_dis">Best Deals on Beauty Products</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="twelveth_div">
                <div className="sli12">

                </div>
                <p className="dis_red">Starting from ₹799</p>
                <p className="under_dis">Ladders and home products</p>
            </div>
            </SwiperSlide>

      </Swiper>
        </div>
        
        </Link>
    )
}
export default Homecard;