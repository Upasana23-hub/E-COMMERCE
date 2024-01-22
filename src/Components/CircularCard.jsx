import React from 'react';
import './CircularCard.css';
import men from "../pictures/men.avif"
import women from "../pictures/women.avif"
import winterwear from "../pictures/winterwear.avif"
import kids from "../pictures/kids.avif"
import bag from "../pictures/bag.avif"
import shoe from "../pictures/shoe.jpg"
import watch from "../pictures/watch.jpg"
import mobile from "../pictures/mobile.jpg"
const CircularCard = () => {
  const data=[
  {
    id:1,
    name:"Men",
    image:men
  },
  {
    id:2,
    name:"Women",
    image:women
  },
  {
    id:3,
    name:"Kids",
    image:kids
  },
  {
    id:4,
    name:"Footwear",
    image:shoe
  },
  {
    id:5,
    name:"Electronics",
    image:mobile
  },
  {
    id:6,
    name:"Bags",
    image:bag
  },
  {
    id:7,
    name:"Winterwear",
    image:winterwear
  },
  {
    id:8,
    name:"Watch",
    image:watch
  }
]
  return (
    <>
    {data.map((item) => (
        <div className="outer1" key={item.id}>
        <div className="inner-image-div">
          <img src={item.image} alt='pic' className='img'/>
        </div>
        <div className="inner-text-div">
          <p>{item.name}</p>
        </div>
      </div>
      ))}
    </>
  );
};

export default CircularCard;