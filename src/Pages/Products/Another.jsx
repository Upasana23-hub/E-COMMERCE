import React from 'react'
import './Another.css';
import { useEffect } from "react";
import { Data } from "../../Components/Data";
import {Card} from "../../Components/Card";
import { useLocation } from 'react-router-dom';
const Another = () => {

  //   const [category, setcategory] = useState([]);
  //   useEffect(() =>{
  //   filter("");
  // },[]);
  // arrow function
  // const filter = (names) => {
  //   const filtered = Data.filter((item) => item.name.includes(names));
  //   console.log(filtered);
  //   setcategory(filtered);
  // };

  const location = useLocation();
  
  console.log(location.search)
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
  return (
    <>
      <div style={{display:'flex',flexWrap: "wrap"}} className='card-out'>
            {Data.map((item) => (
            <Card
              image={item.image}
              Name={item.Name}
              about={item.about}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
              size={item.size}
            />
            ))}
            </div>
    </>
  )
}

export default Another
