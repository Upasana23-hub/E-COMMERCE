import React, {useState,useEffect} from "react";
import "./smallSlider.css";
// import { Data } from '../Data'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export const Small = () => {
    const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  function calculateSlidesPerView() {
    if (window.innerWidth <= 420) {
      return 3;
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
      <div className="Full_page1">
        <div className="outer_card_div">
          <div className="inner_card_div1">
            <div className="up_inner_card_div1">
              <div className="card_1">
                <div className="instr">
                  <h3 className="up-card-details2">
                    Decorate your home in style
                  </h3>
                </div>
                <Link to="/Another?search=decorate">
                  <div className="pi">
                    <div className="up_pics">
                      <div className="pic1">
                        <div className="pi1"></div>
                        <p className="style">
                          Cushion covers, bedsheets & more
                        </p>
                      </div>
                      <div className="pic2">
                        <div className="pi2"></div>
                        <p className="style">Figurines, vases and more</p>
                      </div>
                    </div>
                    <div className="dwn_pics">
                      <div className="pic3">
                        <div className="pi3"></div>
                        <p className="style">Home Storage</p>
                      </div>
                      <div className="pic4">
                        <div className="pi4"></div>
                        <p className="style">Lighting solutions</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="card_2">
                <div className="instr">
                  <h3 className="up-card-details2">
                    Up to 60% off | Styles for men
                  </h3>
                </div>
                <div className="pi">
                  <div className="up_pics">
                    <div className="pic1">
                      <Link to="/Another?search=shirt">
                        <div className="pi5"></div>
                      </Link>
                      <p className="style">Clothing</p>
                    </div>

                    <div className="pic2">
                      <Link to="/Another?search=shoe">
                        <div className="pi6"></div>
                      </Link>
                      <p className="style">Footwear</p>
                    </div>
                  </div>
                  <div className="dwn_pics">
                    <div className="pic3">
                      <Link to="/Another?search=Watch">
                        <div className="pi7"></div>
                      </Link>
                      <p className="style">Watches</p>
                    </div>
                    <div className="pic4">
                      <Link to="/Another?search=bag">
                        <div className="pi8"></div>
                      </Link>
                      <p className="style">Bags & wallets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dwn_inner_card_div1">
              <div className="card_3">
                <div className="instr">
                  <h3 className="up-card-details2">
                    Up to 60% off | Styles for women
                  </h3>
                </div>
                <div className="pi">
                  <div className="up_pics">
                    <div className="pic1">
                      <Link to="/Another?search=Women cloth">
                        <div className="pi9"></div>
                      </Link>
                      <p className="style">Womens's Clothing</p>
                    </div>
                    <div className="pic2">
                      <Link to="/Another?search=Women shoe">
                        <div className="pi10"></div>
                      </Link>
                      <p className="style">Women Footwear</p>
                    </div>
                  </div>
                  <div className="dwn_pics">
                    <div className="pic3">
                      <Link to="/Another?search=Watch">
                        <div className="pi11"></div>
                      </Link>
                      <p className="style">Watches</p>
                    </div>
                    <div className="pic4">
                      <Link to="/Another?search=jwellery">
                        <div className="pi12"></div>
                      </Link>
                      <p className="style">Fashion jewellery</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_4">
                <div className="instr">
                  <h3 className="up-card-details2">
                    Get the perfect screen size | TVs Starting ₹5,999
                  </h3>
                </div>
                <Link to="/Another?search=TV">
                  <div className="pii">
                    <div className="up_pics">
                      <div className="pic1">
                        <div className="pi13"></div>
                        <p className="style">Budget TVs | Up to 70% off</p>
                      </div>
                      <div className="pic2">
                        <div className="pi14"></div>
                        <p className="style">
                          4k Tvs | Up to 36 months No Cost EMI
                        </p>
                      </div>
                    </div>
                    <div className="dwn_pics">
                      <div className="pic3">
                        <div className="pi15"></div>
                        <p className="style">Big Screens | Up to 60% off</p>
                      </div>
                      <div className="pic4">
                        <div className="pi16"></div>
                        <p className="style">
                          Ultra premium Tvs | Up to 70% off
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/Another?search=mobile" className="inner_card_div2"></Link>
        </div>
        <div className="full-slider-div">
          <div className="up_info_div">
            Up to 60% off | Car & bike accessories & more
          </div>
          <Link to="/Another?search=helmet">
            <div className="Slider_div2">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="first_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="second_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="third_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="fourth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="fifth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="sixth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="seventh_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="eightth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="nineth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="tenth_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="eleventh_pic"></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="twelveth_pic"></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
