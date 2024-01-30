import React from "react";
import './Home.Css'
import Homecard from "../Components/Homecard"
import Product from "../Components/Product"
import Slider from "../Components/Slider"
const Home = () => {
    return(
        <>
        <Product/>
        <Slider/>
        <Homecard/>
       
       

        </>
    )
}
export default Home;