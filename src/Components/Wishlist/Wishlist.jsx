import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import Data from '../Data';
import { MdStarBorderPurple500 } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
const Wishlist = () => {

    const [wish, setWish] = useState([]);
    const location = useLocation();

    /* On Page Load */
    useEffect(() => {
        if (!location.hash) {
        window.scrollTo(0, 0);
        }
    }, [location]);

    useEffect(() => {
        const wish = JSON.parse(localStorage.getItem("wish"));
        if (wish) {
          setWish(wish);
        }
      }, []);
    

    // 
    
    const removeFromWishlist = (WishId) => {
        const updatedWish = wish.filter(itemId => itemId !== WishId);
        setWish(updatedWish); // Update wishlist state
    
        // Check if updatedWish array is not empty before updating local storage
        if (updatedWish.length !== 0) {
            localStorage.setItem("wish", JSON.stringify(updatedWish)); // Update local storage
        } else {
            localStorage.removeItem("wish"); // Remove the "wish" key from local storage
        }
    }

  return (
    <>
    <div className="wish-outer">
        <div className="wish-inner">
            <div className='wish-head'>
                <h2 >My Wishlist </h2><h3 className='count-wishitem'>({wish.length})</h3>
            </div>
            {wish == 0 ? (
            <div>
            <h1 className="empty-wishlist">Your Shopee Wishlist is empty </h1>
            <Link to="/">
            <button className='add-wishlist-btn'><span className='add-wishlist-span'></span>Add Products to Wishlist</button>
            </Link>
            </div>
        ) : ( 
        <>
        <hr/>
        {Data.map((f) => {
            if(wish.includes(f.id)) {
                return (
                    <>
                <div className="wish-items" key={f.id}>
                    <div className="wish-image">
                        <img src={f.image} alt='..'
                        height={120}
                        width={120}
                        />
                    </div>
                    <div className="wish-details">
                        <div className='wish-details-first'>
                            <p>{f.Name} {f.about}</p>
                        </div>
                        <div className='wish-details-second'>
                        <div className='wish-rate'>
                            <p>4.1</p><MdStarBorderPurple500 color='#fff'/>
                        </div>
                        <p className='rate-num'>(2,891)</p>
                        </div>
                        <div className='wish-details-third'>
                            <p className='offer-price'>₹{f.offerPrice}</p>
                            <p className='actual-price'><strike>₹{f.actualPrice}</strike></p>
                            <p className='off'>{f.off}</p>
                        </div>
                    </div>
                    <div className="wish-remove">
                    <button 
                    onClick={() =>{
                        removeFromWishlist(f.id);
                    }}
                    className='remove-btn'>
                    <MdDelete fontSize={20} color='#170940'/>
                    </button>
                    </div>
                </div>
                <hr/>
                </>
                );
                
            }
            return null;
        })}
        </>
    )}
        </div>
    </div>
    </>
  )
}

export default Wishlist;