import React, { useState,useEffect} from "react";
import "./Home_card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Homecard = () => {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  function calculateSlidesPerView() {
    if (window.innerWidth <= 420) {
      return 2;
    } else if (window.innerWidth <= 768) {
      return 3;
    } else {
      return 6;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="card_outer">
        <div className="first_card">
          <div className="instr">
            <h3 className="up-card-details">
              Applications for your home | Up to 50% off
            </h3>
          </div>
          <Link to="/Another?search=electronics">
            <div className="pic">
              <div className="up_pics">
                <div className="pic1">
                  <div className="p1"></div>
                  <p className="style">Air Conditioner</p>
                </div>
                <div className="pic2">
                  <div className="p2"></div>
                  <p className="style">Refrigerators</p>
                </div>
              </div>
              <div className="dwn_pics">
                <div className="pic3">
                  <div className="p3"></div>
                  <p className="style">Microwave</p>
                </div>
                <div className="pic4">
                  <div className="p4"></div>
                  <p className="style">Washing machine</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="second_card">
          <div className="instr">
            <h3 className="up-card-details">
              Baby essentials & toys | Barnds & more
            </h3>
          </div>
          <Link to="/Another?search=baby">
            <div className="pic">
              <div className="up_pics">
                <div className="pic1">
                  <div className="p5"></div>
                  <p className="style">Diapers & Wipes</p>
                </div>
                <div className="pic2">
                  <div className="p6"></div>
                  <p className="style">Baby Cardels & more</p>
                </div>
              </div>
              <div className="dwn_pics">
                <div className="pic3">
                  <div className="p7"></div>
                  <p className="style">Soft Toys and Indoor games</p>
                </div>
                <div className="pic4">
                  <div className="p8"></div>
                  <p className="style">40% off | little Bags</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="third_card">
          <div className="instr">
            <h3 className="up-card-details">
              Starting ₹99 | All your home improvement needs
            </h3>
          </div>
          <Link to="/Another?search=home acces">
            <div className="pic">
              <div className="up_pics">
                <div className="pic1">
                  <div className="p9"></div>
                  <p className="style">Spin mops, wipes & more</p>
                </div>
                <div className="pic2">
                  <div className="p10"></div>
                  <p className="style">Bathroom handware & accessories</p>
                </div>
              </div>
              <div className="dwn_pics">
                <div className="pic3">
                  <div className="p11"></div>
                  <p className="style">Hammers, screwdrivers & more</p>
                </div>
                <div className="pic4">
                  <div className="p12"></div>
                  <p className="style">Up to 70% off | Extension Boards</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <Link className="fourth_card" to="/Another?search=mobile"></Link>
      </div>

      <div className="slider_outer">
        <div className="info_div">Today's Deals</div>
        <div className="scroller-div">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/Another?search=shoe">
                <div className="first_div">
                  <div className="sli1"></div>
                  <p className="dis_red">Up to 68% off</p>
                  <p className="under_dis">Formal Shoes</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=perfumes">
                <div className="second_div">
                  <div className="sli2"></div>
                  <p className="dis_red">Up to 70% off</p>
                  <p className="under_dis">Amazing Deals on Perfumes</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=shoe">
                <div className="third_div">
                  <div className="sli3"></div>
                  <p className="dis_red">Up to 50% off</p>
                  <p className="under_dis">Branded Shoes</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=shirt">
                <div className="fourth_div">
                  <div className="sli4"></div>
                  <p className="dis_red">Up to 90% off</p>
                  <p className="under_dis">
                    Amazing best deals on tshirts & shirts
                  </p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=decorate">
                <div className="fifth_div">
                  <div className="sli5"></div>
                  <p className="dis_red">Up to 50% off</p>
                  <p className="under_dis">Best Deal on Home Decoration</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=skirt">
                <div className="sixth_div">
                  <div className="sli6"></div>
                  <p className="dis_red">Starting from ₹299</p>
                  <p className="under_dis">Best offers on Skirts</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=saree">
                <div className="seventh_div">
                  <div className="sli7"></div>
                  <p className="dis_red">Starting from ₹199</p>
                  <p className="under_dis">Latest Deals on sarees</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=shoe">
                <div className="eightth_div">
                  <div className="sli8"></div>
                  <p className="dis_red">Up to 78% off</p>
                  <p className="under_dis">Best Deals on Sports Shoes</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=electronics">
                <div className="nineth_div">
                  <div className="sli9"></div>
                  <p className="dis_red">Up to 25% off</p>
                  <p className="under_dis">Electronics Accessories</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=bag">
                <div className="tenth_div">
                  <div className="sli10"></div>
                  <p className="dis_red">Up to 68% off</p>
                  <p className="under_dis">Full leather Bags</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=mobile">
                <div className="eleventh_div">
                  <div className="sli11"></div>
                  <p className="dis_red">Up to 45% off</p>
                  <p className="under_dis">Best Deals on Latest Phones</p>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/Another?search=pant">
                <div className="twelveth_div">
                  <div className="sli12"></div>
                  <p className="dis_red">Up to 50% off</p>
                  <p className="under_dis">Biggest Deals on Pants</p>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Homecard;
