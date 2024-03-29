import React from 'react'
import './Newcard.css'
import { Link } from "react-router-dom";

const Newcard = () => {
  return (
    <>
    <div className='outer_Newcard'>
        <div className='first_box'>
            <div className="instr">
                    <h3>Up to ₹499 | Pocket-friendly fashion</h3>
            </div>
            <div className='box01'>
            <Link to="/Another?search=brands">
                <div className='up_pics'>
                        <div className="box01_1">
                            <div className="img1_1">

                            </div>
                            <p className="style">clothing</p>
                        </div>
                        <div className="box01_2">
                            <div className="img2">

                            </div>
                            <p className="style">Backpacks</p>
                        </div>
                </div>
                <div className='dwn_pics'>
                        <div className="box01_3">
                            <div className="img3">
                                
                            </div>
                            <p className="style">Footwear</p>
                        </div>
                        <div className="box01_4">
                            <div className="img4">

                            </div>
                            <p className="style">View all</p>
                        </div>
                </div>
                </Link>
            </div>
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
                    <Link to="/Another?search=Women cloth" className="img9">
                            
                            </Link>
                            <Link to="/Another?search=skirt" className="img10">

                            </Link>
                    </div>
                    <div className='dwn_pics'>
                            <Link to="/Another?search=jwellery" className="img11">
                            
                            </Link>
                            <Link to="/Another?search=Women cloth" className="img12">
                            
                            </Link>
                    </div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Newcard