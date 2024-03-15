import React from 'react';
import './Single.css';
import { useParams, } from 'react-router-dom'; //allows to access parameters from the URL
import { Data } from '../../Components/Data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {LocalOffer as Badge} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import {useState} from 'react';
import { Table,TableBody,TableRow,TableCell } from '@mui/material';
import PinDropIcon from '@mui/icons-material/PinDrop';
import Cartitems from '../../Components/Cartitems/Cartitems';


const Single = () => {
  const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
  
  // Create Empty cart
  const getDefaultCart = ()=>{
    let cart = {};
    for(let index =0; index < Data.length +1;index++){
      cart[index] = 0;
    }
    return cart;
  }

  const[cartItems,setcartItems] = useState(getDefaultCart());

  const { id } = useParams();
  const date = new Date(new Date().getTime()+(5*24*60*60*1000))

  

  // add to cart
  const addtocart = (itemid) =>{
    setcartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    // console.log(cartItems);
  }

  //remove from cart

  const removefromcart = (itemid) =>{
    setcartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }

  // Find the item in Data array based on id
  const selectedItem = Data.find(item => item.id === parseInt(id));
  // console.log(cartitems);

  // If selectedItem is not found, handle it 
  if (!selectedItem) {
    return <div>Item not found!</div>;
  }

  
  

  return (
    <div className='single-outer'>
      <div className='single-inner'>
        <div className='single-pic'>
          
          <div className='single-picture'>
          <div className='sin-heart'>
            <FavoriteIcon />
          </div>
            <img src={selectedItem.image} className='sing-img' alt='' />  
          </div>
          <div className='butto-div'>
            <button onClick={()=>{addtocart(selectedItem.id)}} className='si-butt-1' ><ShoppingCartIcon/>Add to cart</button>
            <button className='si-butt-2'><FlashOnIcon/>Buy Now</button>
          </div>
        </div>
        <div className='single-det'>
          <p className='sin-para'>{selectedItem.Name}</p>
          <p className='sin-desc'>{selectedItem.about}</p>
          <p style={{color:'green',fontSize:'100%'}}>Special Price</p>
          <div className='sin-rate'>
            
            <p className='sin-span1-1'>₹{selectedItem.offerPrice}</p>
            <p className='sin-span2-2'>₹{selectedItem.actualPrice}</p>
            <p className='sin-span2-3'>&nbsp;&nbsp;{selectedItem.off} </p>
            <p style={{backgroundcolor:'white',marginTop:'3%',marginLeft:'1%',opacity:'0.3',}}><InfoOutlinedIcon/></p>
          </div>
          <div className='rating-sec'>
            <button className='rati-box'>4.1<StarBorderPurple500Icon fontSize='40%'/></button>
            <p className='ra-tex'>170 Ratings & 12 Reviews</p>
          </div>
          <p className='sin-avai'>Available Offers</p>
          <p className='ty-1'><Badge fontSize='small' sx={{color:'#41A317'}}/>&nbsp;&nbsp;<b>Bank Offer</b> Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI</p>
          <p className='ty-1'><Badge fontSize='small' sx={{color:'#41A317'}}/>&nbsp;&nbsp;<b>Bank Offer</b> 5% Cashback on Flipkart Axis Bank Card</p>
          <p className='ty-1'><Badge fontSize='small' sx={{color:'#41A317'}}/>&nbsp;&nbsp;<b>Special Price</b> Get extra 40% off (price inclusive of cashback/coupon)</p>
          <p className='ty-1'><Badge fontSize='small' sx={{color:'#41A317'}}/>&nbsp;&nbsp;<b>Partner Offer</b> Sign-up for Shopee Pay Later & get free Times Prime Benefits<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; worth ₹10,000*</p>

          <Table>
            <TableBody>
              <TableRow>
                <TableCell style={{color: '#878787'}}><PinDropIcon/>Deliver to</TableCell>
                <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} |₹40</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                <TableCell > 6 Months</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{color: '#878787'}}>Seller</TableCell>
                <TableCell > 
                  <p style={{color: '#2874f0', fontWeight: 600, fontSize: '17px'}}>HSAtlastrade</p>
                  <p style={{fontWeight: 500}}>&diams; 10 Days Return Policy</p>
                  <p style={{fontWeight: 500}}>&diams; GST Invoice Available</p>
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>
        </div>
      </div>
      <Cartitems cartItems={cartItems} removefromcart={removefromcart}  />
    </div>
  );
};

export default Single;
