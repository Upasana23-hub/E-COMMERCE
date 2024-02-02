import React from "react";
import './Home.Css'
import Homecard from "../Components/Homecard"
import Product from "../Components/Product"
import Slider from "../Components/Slider"
import { Small } from "../Components/Small_slider/Small";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
    const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
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