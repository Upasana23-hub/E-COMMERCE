import React from 'react'
// import { useEffect, useState } from "react";
import { Data } from "../../Components/Data";
import {Card} from "../../Components/Card";
const Another = () => {

  //   const [category, setcategory] = useState([]);
  //   useEffect(() =>{
  //   filter("");
  // },[]);
  // const filter = (names) => {
  //   const filtered = Data.filter((item) => item.name.includes(names));
  //   console.log(filtered);
  //   setcategory(filtered);
  // };
  return (
    <>
      <div style={{display:'flex',flexWrap: "wrap"}}>
            {Data.map((item) => (
            <Card
              image={item.image}
              Name={item.Name}
              // about={item.about}
              // actualPrice={item.actualPrice}
              // offerPrice={item.offerPrice}
            />
            ))}
            </div>
    </>
  )
}

export default Another
