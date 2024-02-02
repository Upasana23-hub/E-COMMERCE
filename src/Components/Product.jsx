import React from "react";
import './Product.css'
import CircularCard from "./CircularCard";
const Product = () => {
    return(
        <div className="product-outer">
        <div className="outer-div1">
            {/* <div className="inner-1"></div> */}
            <div className="inner-2">
            <CircularCard/>
            </div>
            {/* <div className="inner-3"></div> */}
            
        </div>
        </div>
    );
}
export default Product;