import React from "react";
import './Home.Css'
import Homecard from "../Components/Homecard"
import Product from "../Components/Product"
import Slider from "../Components/Slider"
import { Small } from "../Components/Small_slider/Small";
const Home = () => {
    return(
        <>
        <Product/>
        <Slider/>
        <Homecard/>
        <Small/>
       

        </>
    )
}
export default Home;