import React, { useEffect, useState } from 'react';
import './Another.css';
import { Data } from "../../Components/Data";
import { Card } from "../../Components/Card";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Another = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (Data && Data.length > 0 ) {
      const filtered = Data.filter(item =>
        item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(Data);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: "wrap" }} className='card-out'>
        {filteredData.map(item => (
          <Link to={`/Single/${item.id}`} key={item.id}>
            <Card
              image={item.image}
              Name={item.Name}
              about={item.about}
              actualPrice={item.actualPrice}
              offerPrice={item.offerPrice}
              size={item.size}
              off={item.off}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Another;
