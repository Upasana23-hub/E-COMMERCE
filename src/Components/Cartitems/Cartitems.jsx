// // import React, { useContext } from 'react';
// import './Cartitems.css';
// import { Data } from '../Data';
// // import { useState } from 'react';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// // import Single from '../../Pages/Products/Single';

// const Cartitems = (cartItems,removefromcart) => {
//     // const {cartItems,removefromcart}= useContext(Single)
//     // Create Empty cart
//     // const getDefaultCart = () => {
//     //     let cart = {};
//     //     for (let index = 0; index < Data.length + 1; index++) {
//     //         cart[index] = 0;
//     //     }
//     //     return cart;
//     // };

//     // const [cartitems, setcartitems] = useState(getDefaultCart());

//     // const removefromcart = (itemid) => {
//     //     setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
//     // };
//     console.log(cartItems.cartItems);

//     return (
//         <div className='cartitems'>
//             <div className="cartitems-format-main">
//                 <p>Products</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//             </div>

//             <hr />
//             {Data.map((e) => {
//                 if ((cartItems.cartItems[e.id]) > 0 ) 
//                 {
//                     return <div>                
//                             <div className="cartitems-format">
//                                 <img src={e.image} alt='' className='carticon-product-icon' />
//                                 <p>{e.Name}</p>
//                                 <p> ₹{e.offerPrice}</p>
//                                 <button className='cartitems-quantity'>{cartItems.cartItems[e.id]}</button>
//                                 <p>{e.offerPrice * cartItems.cartItems[e.id]}</p>
//                                 <img src={HighlightOffIcon} onClick={() => { removefromcart(e.id) }} alt='' />
//                             </div>
//                             <hr />
//                         </div>
                    
//                 } else {
//                     return <>Hello hi</>; // Return null if the condition is not met
//                 }
//             })}
//         </div>
//     );
// };

// export default Cartitems;



import React from 'react'

const Cartitems = () => {
  return (
    <div>
      
    </div>
  )
}

export default Cartitems
