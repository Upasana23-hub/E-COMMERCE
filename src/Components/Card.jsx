import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ Name, image, about, offerPrice, actualPrice, size }) => {
  return (
    <Link to="/Single:name">
      <div className="card">
        <div className="card__heart">
          <FavoriteIcon />
        </div>
        <div className="card__image">
          <img src={image} alt="images" />
        </div>
        <div className="productDet">
          <div className="card__details">
            <p className="para">{Name}</p>
            <p className="desc">{about}</p>
            <div className="rate">
              <p className="span1">₹{offerPrice}</p>
              <p className="span2">₹{actualPrice}</p>
              <p className="span3" >55%</p>
            </div>
          </div>
          <div className="card__size">
            <p>
              size <p className="sizing"> {size}</p>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
