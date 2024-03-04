import React from 'react';
import './Single.css';
import { useParams, } from 'react-router-dom'; //allows to access parameters from the URL
import { Data } from '../../Components/Data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Single = () => {
  const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
  const { id } = useParams();

  // Find the item in Data array based on id
  const selectedItem = Data.find(item => item.id === parseInt(id));

  // If selectedItem is not found, handle it 
  if (!selectedItem) {
    return <div>Item not found!</div>;
  }
  return (
    <div className='single-outer'>
      <div className='single-inner'>
        <div className='single-pic'>
          <div className='single-picture'>
            <img src={selectedItem.image} className='sing-img' alt='' />  
          </div>
          <div className='butto-div'>
            <button className='si-butt-1' ><ShoppingCartIcon/>Add to cart</button>
            <button className='si-butt-2'><FlashOnIcon/>Buy Now</button>
          </div>
        </div>
        <div className='single-det'>
          {selectedItem.about}
          {selectedItem.offerPrice}
          {selectedItem.actualPrice}
          <p className='ra-tex'>8 Ratings & 4 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
