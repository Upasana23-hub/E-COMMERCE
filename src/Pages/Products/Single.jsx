import React from "react";
import "./Single.css";
import { useParams } from "react-router-dom"; //allows to access parameters from the URL
import { Data } from "../../Components/Data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MdStarBorderPurple500 } from "react-icons/md";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { LocalOffer as Badge } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Table, TableBody, TableRow, TableCell } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";

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

  // add to wishlist
  const addtowishlist = (wishid) => {
    let wishItemString = localStorage.getItem("wish");
    let wishItemArray = JSON.parse(wishItemString);
    console.log("Test: ", wishItemArray);
    if (!wishItemArray) {
      localStorage.setItem("wish", JSON.stringify([wishid]));
    } else if (wishItemArray.length) {
      localStorage.setItem("wish", JSON.stringify([...wishItemArray, wishid]));
    }
    // localStorage.setItem("items", [itemid]);
    // console.log(cartItems);
  };


  // Find the item in Data array based on id
  const selectedItem = Data.find((item) => item.id === parseInt(id));
  // console.log(cartitems);

  // If selectedItem is not found, handle it
  if (!selectedItem) {
    return <div>Item not found!</div>;
  }

  return (
    <div className="single-outer">
      <div className="single-inner">
        <div className="single-pic">
          <div className="single-picture">
            <button
             onClick={() => {
              addtowishlist(selectedItem.id);
            }}
             className="sin-heart">
              <Link to="/wishlist">
              <FavoriteIcon />
              </Link>
            </button>
            <img src={selectedItem.image} className="sing-img" alt="" />
          </div>
          <div className="butto-div">
            <button
              onClick={() => {
                addtocart(selectedItem.id);
              }}
              className="si-butt-1"
            >
              <Link to="/cart">
                <ShoppingCartIcon className="single-icon" />
                Add to cart
              </Link>
            </button>

            <button className="si-butt-2">
              <Link to="/order-summary">
                <FlashOnIcon className="single-icon"/>
                Buy Now
              </Link>
            </button>
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
          <div className='wish-rate'>
              <p>4.1</p><MdStarBorderPurple500 color='#fff'/>
            </div>
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
    </div>
  );
};

export default Single;
