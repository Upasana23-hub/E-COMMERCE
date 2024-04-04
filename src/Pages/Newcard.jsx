import React from 'react'
import './Newcard.css'
import { Link } from "react-router-dom";

const Newcard = () => {
  return (
    <>
    <div className='outer_Newcard'>
        <div className='first_box'>
            <div className="instr">
                    <h3>Starting from ₹499 | Best Winter Deals on Jackets and others</h3>
            </div>
            <Link to="/Another?search=winter">
            <div className='box01'>
            
            </div>
            </Link>
        </div>
        <div className='second_box'>
            <div className="instr">
                    <h3>Up to 50% off | Baby Fashion & Teddy Dresses</h3>
            </div>
            <Link to="/Another?search=teddy dress">
            <div className='box02'>

            </div>
            </Link>
        </div>
        <div className='third_box'>
            <div className="instr">
                    <h3>Starting ₹799 | Men & Women Stylish Pants</h3>
            </div>
            <Link to="/Another?search=pant">
            <div className="box03">

            </div>
            </Link>
        </div>
        <div className='fourth_box'>
            <div className="instr">
                    <h3>Up to 60% off | Women's fashion from stores near you</h3>
            </div>
                <div className="box04">
                    <div className='up_pics'>
                    <Link to="/Another?search=Women" className="img9">
                            
                            </Link>
                            <Link to="/Another?search=skirt" className="img10">

                            </Link>
                    </div>
                    <div className='dwn_pics'>
                            <Link to="/Another?search=jwellery" className="img11">
                            
                            </Link>
                            <Link to="/Another?search=kurti" className="img12">
                            
                            </Link>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Newcard