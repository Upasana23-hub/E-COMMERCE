import { Slider } from "./Components/Slider";
import { Data } from "./Components/Data";
import { useEffect, useState } from "react";
import {Card} from "./Components/Card";
function App() {
  const [category, setcategory] = useState([]);
  useEffect(() =>{
    filter("");
  },[]);
  const filter = (names) => {
    const filtered = Data.filter((item) => item.name.includes(names));
    console.log(filtered);
    setcategory(filtered);
  };
  return (
    
    <div className="App">
      <Slider/>    
      <div style={{display:'flex',flexWrap: "wrap"}}>
        {category.map((item) => (
        <Card
          image={item.image}
          Name={item.Name}
          about={item.about}
          actualPrice={item.actualPrice}
          offerPrice={item.offerPrice}
        />
        ))}
      </div>
    </div>
  );
}

export default App;

