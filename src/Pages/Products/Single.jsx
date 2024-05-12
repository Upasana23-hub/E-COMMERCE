import React from "react";
import "./Single.css";
import { useParams } from "react-router-dom"; //allows to access parameters from the URL
import { Data } from "../../Components/Data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { LocalOffer as Badge } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { FreeMode, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


const Single = () => {
  /* Scroll to Top */
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const { id } = useParams();
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  /* Adding to Cart */
  const addtocart = (itemid) => {
    let cartItemString = localStorage.getItem("items");
    let cartItemArray = JSON.parse(cartItemString);
    console.log("Test: ", cartItemArray);
    if (!cartItemArray) {
      localStorage.setItem("items", JSON.stringify([itemid]));
    } else if (cartItemArray.length) {
      localStorage.setItem("items", JSON.stringify([...cartItemArray, itemid]));
    }
  };

  /* Adding wishlist */
  
  const addtowishlist = (wishid) => {
    let wishItemString = localStorage.getItem("wish");
    let wishItemArray = JSON.parse(wishItemString);

    // Check if the item ID already exists in the wishlist
    if (!wishItemArray || !wishItemArray.includes(wishid)) {
        // If the item ID doesn't exist, add it to the wishlist
        const updatedWishlist = wishItemArray ? [...wishItemArray, wishid] : [wishid];
        localStorage.setItem("wish", JSON.stringify(updatedWishlist));
    }
};



  // Find the item in Data array based on id
  const selectedItem = Data.find((item) => item.id === parseInt(id));
  // console.log(cartitems);

  // If selectedItem is not found, handle it
  if (!selectedItem) {
    return <div>Item not found!</div>;
  }

  const womenProduct=Data.filter((product)=>product.categories === selectedItem.categories);



  return (
    <div className="single-outer">
      <div className="single-inner">
        <div className="single-inner-upper">
        <div className="single-pic">
          <div className="single-picture">
          <img src={selectedItem.image} className="sing-img" alt="" />
          <Link to="/wishlist">
            <button
             onClick={() => {
              addtowishlist(selectedItem.id);
            }}
            className="sin-heart">
              
              <FavoriteIcon style={{height:35 ,width:30}}/>
              
            </button>
            </Link>
          </div>
          <div className="cart-buy-div">
          <Link to="/cart" className="link-cart-div">
            <button
              onClick={() => {
                addtocart(selectedItem.id);
              }}
              className="si-butt-1"
            >
              
              <ShoppingCartIcon/>
               <p className="cart-icon-p"> Add to cart</p>
              
            </button>
            </Link>
            
            <Link to="/order-summary" className="link-buynow-div">
            <button className="si-butt-2">
              
                <FlashOnIcon/>
                Buy Now
             
            </button>
            </Link>
          </div>
        </div>
        <div className="single-det">
          <p className="sin-para">{selectedItem.Name}</p>
          <p className="sin-desc">{selectedItem.about}</p>
          <p style={{ color: "green", fontSize: "100%" }}>Special Price</p>
          <div className="sin-rate">
            <p className="sin-span1-1">₹{selectedItem.offerPrice}</p>
            <p className="sin-span2-2">₹{selectedItem.actualPrice}</p>
            <p className="sin-span2-3">&nbsp;&nbsp;{selectedItem.off} </p>
            <p
              style={{
                backgroundcolor: "white",
                marginTop: "3%",
                marginLeft: "1%",
                opacity: "0.3",
              }}
            >
              <InfoOutlinedIcon />
            </p>
          </div>
          <div className="rating-sec">
            <button className="rati-box">
              4.1
              <StarBorderPurple500Icon fontSize="40%" />
            </button>
            <p className="ra-tex">170 Ratings & 12 Reviews</p>
          </div>
          <p className="sin-avai">Available Offers</p>
          <p className="ty-1">
            <Badge fontSize="small" sx={{ color: "#41A317" }} />
            &nbsp;&nbsp;<b>Bank Offer</b> Get ₹25* instant discount for the 1st
            Shopee Order using Shopee UPI
          </p>
          <p className="ty-1">
            <Badge fontSize="small" sx={{ color: "#41A317" }} />
            &nbsp;&nbsp;<b>Bank Offer</b> 5% Cashback on Shopee Axis Bank Card
          </p>
          <p className="ty-1">
            <Badge fontSize="small" sx={{ color: "#41A317" }} />
            &nbsp;&nbsp;<b>Special Price</b> Get extra 40% off (price inclusive
            of cashback/coupon)
          </p>
          <p className="ty-1">
            <Badge fontSize="small" sx={{ color: "#41A317" }} />
            &nbsp;&nbsp;<b>Partner Offer</b> Sign-up for Shopee Pay Later & get
            free Times Prime Benefits
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; worth ₹10,000*
          </p>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{ color: "#878787" }}>
                  <PinDropIcon />
                  Deliver to
                </TableCell>
                <TableCell style={{ fontWeight: 600 }}>
                  Delivery by {date.toDateString()} |₹40
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
                <TableCell> 6 Months</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: "#878787" }}>Seller</TableCell>
                <TableCell>
                  <p
                    style={{
                      color: "#2874f0",
                      fontWeight: 600,
                      fontSize: "17px",
                    }}
                  >
                    HSAtlastrade
                  </p>
                  <p style={{ fontWeight: 500 }}>
                    &diams; 10 Days Return Policy
                  </p>
                  <p style={{ fontWeight: 500 }}>
                    &diams; GST Invoice Available
                  </p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        </div>
        <Link to='/signin'><p className="single-report"><i class="fa-regular fa-message"></i> &nbsp; Report an issue with this product</p></Link>
        <hr/>
        <div className="single-inner-lower">

          <div className='full-slider-div'>
              <div className='up_info_div'>
                Suggested For You
              </div>
    
              <div className='single-Slider_div2'>
    
                <Swiper
                  slidesPerView={6}
                  spaceBetween={20}
                  freeMode={true}
                  navigation={true}
                  modules={[FreeMode, Pagination, Navigation]}
                  className="mySwiper">

                  {womenProduct.slice(0,10).map((product)=>(
                      <SwiperSlide key={product.id}> 
                        <div className="single-product-pic">
                          <Link to={`/Single/${product.id}`}>
                            <img src= {product.image} alt={product.Name}/>
                          </Link>
                        </div>
                      </SwiperSlide>
                    ))}
        
                </Swiper>
    </div>
    
    </div>





        </div>

      </div>
      
    </div>
  );
};

export default Single;
