import React from 'react';
import './CircularCard.css';
import men from "../pictures/men.avif";
import women from "../pictures/women.avif"
import winterwear from "../pictures/winterwear.avif"
import kids from "../pictures/kids.avif"
import bag from "../pictures/bag.avif"
import shoe from "../pictures/shoe.jpg"
import watch from "../pictures/watch.jpg"
import mobile from "../pictures/mobile.jpg"

const CircularCard = () => {
  const data = [
    {
      id: 1,
      name: "Men",
      image: men,
      link: "/Another?search=shirt" 
    },
    {
      id: 2,
      name: "Women",
      image: women,
      link: "/Another?search=Women" 
    },
    {
      id: 3,
      name: "Kids",
      image: kids,
      link: "/Another?search=teddy dress"
    },
    {
      id: 4,
      name: "Footwear",
      image: shoe,
      link: "/Another?search=shoe"
    },
    {
      id: 5,
      name: "Mobile",
      image: mobile,
      link: "/Another?search=mobile"
    },
    {
      id: 6,
      name: "Bags",
      image: bag,
      link: "/Another?search=bag"
    },
    {
      id: 7,
      name: "Winterwear",
      image: winterwear,
      link: "/Another?search=winter"
    },
    {
      id: 8,
      name: "Watch",
      image: watch,
      link: "/Another?search=watch"
    }
  ];

  return (
    <>
      {data.map((item) => (
        <div className="outer1" key={item.id}>
          
          <a href={item.link} className="inner-image-div">
            <img src={item.image} alt='pic' className='img'/>
          </a>
          <div className="inner-text-div">
            <p>{item.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CircularCard;