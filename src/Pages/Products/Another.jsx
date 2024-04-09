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
  const [searchError, setSearchError] = useState(false); //State to track search error

  useEffect(() => {
    if (Data && Data.length > 0 ) {
      const filtered = Data.filter(item =>
        item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      setSearchError(filtered.length === 0);  // set searcherror state based on filter
    } else {
      setFilteredData(Data);
      setSearchError(false); // reset searcherror state if data isd empty
    }
  }, [searchTerm]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {searchError && <div className='search-error'><h1>No items found matching your search. Please try again.... </h1></div>}
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
