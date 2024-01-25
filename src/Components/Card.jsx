
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
import "./Card.css";
import { Link } from 'react-router-dom';
export const Card = ({offerPrice,actualPrice,image,Name,about}) => {
  return (
    <Link to={`/ /${Name}`}>
    <div className='card'>
        <div className="card__heart">
            <FavoriteIcon/>
        </div>
        <div className="card__image">
            <img src={image} alt="images" />
        </div>
        <div className="productDet">

        
        <div className="card__details">
            <p className='title'>{Name}</p>
            <p>{about}</p>
            <span className='span1'>₹{offerPrice}</span>
            <span className='span2'>₹{actualPrice}</span>
            <span className='span3'>55%</span>
        </div>
        <div className="card__size">
            <p>
                size <span> 6,7,8,9</span>
            </p>
        </div>
        </div>
    </div>
    </Link>
  )
}

// export default Card;
