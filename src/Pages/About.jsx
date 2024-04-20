import React, { useEffect, useState } from 'react'
import './About.css'
// import './AnimatedGalery.css'
import img1 from '../pictures/girl-about.jpg'
import img5 from '../pictures/kids-about.jpeg'
import img3 from '../pictures/men-about.avif'
import img2 from '../pictures/bag-about.avif'
import img4 from '../pictures/shoe.avif'
import Delivery from '../pictures/Delivery (2).png'
import Return from '../pictures/return.png'
import Customer from '../pictures/Customer.png'
import Know from '../pictures/Know.avif'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const About = () => {
  const images = [img1, img2, img3, img4, img5];
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000)
    
    return () => clearInterval(intervalId);
}, )
const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);
  return (
    <>
    <div className='main-outer'>
      <div className='about-outer'>
        <div className='title'>
          <p className='about'>About Us</p>
        </div>
      </div>
      <p className='about1'>THE SHOPEE EXPERIENCES</p>
      <div className='body'>
        <div className='image'>
        <img src={currentImage } alt='img' Height={442} width={536}/>
        </div>
        <div className="about-text-1">
          <p className='about-text'>
          We launched Shopee in 2018, as a curated and managed marketplace with an endeavor to inspire consumers to make fashion and lifestyle choices that best suit them. We have a wide assortment of offerings, across price points, to cater to women, men and children of diverse demographics. Presently, Shopee houses 1,500+ brands and over 1.8 million products across five consumer segments: women, men, kids, tech and home. Within these consumer segments, we merchandise across several categories including western wear, Indian wear, lingerie, footwear, bags, jewelry, accessories, athleisure, home décor, bath, bed and kitchen in order to cater to the diverse consumers’ journeys across our platform. We offer a mix of brands across established national brands, international brands, luxury brands, and emerging labels and designers.
          </p>
        </div>
      </div>
      <br/> <br/><br/>
      <p className='about-new-1'>WHAT SETS US APART</p>
      <div className='about-text1'>
        <p className='about-textbox'>While we offer a wide range of products, we place strong emphasis on curation. We identify fashion-forward brands, vetting for style and quality, and further select styles within these brands to offer. We also place importance on selling full-price products, reducing reliance on discounting, and selling the latest season’s designs. In addition, we use digital content, personalized mobile application experiences and proprietary recommendation algorithms, to build differentiated style-driven, discovery-led experiences for consumers.</p>
      </div>
      <div className='new-promise'><p className='promise'>Our Promise</p></div>
      <div className='box'>
        <div className="box1">
          <div className="img1"><img src={Customer} className='image-new' alt='Customer' height={188.7} width={282.7}/></div>
          <div className="text1">
            <p className='our-promise'>Customer Satisfaction</p>
          </div>
        </div>
        <div className="box2">
          <div className="img1"><img src={Delivery} className='image-new' alt='Delivery' height={188.7} width={282.7}/></div>
          <div className="text1">
            <p className='our-promise'>Speedy Delivery</p>
          </div>
        </div>
        <div className="box3">
          <div className="img1"><img src={Return} className='image-new' alt='Return' height={188.7} width={282.7}/></div>
          <div className="text1">
            <p className='our-promise'>Easy Return</p>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <p className='about1'>GET TO KNOW THEM</p>
      <div className='follow'>
        <div className="follow-text">
          <p className='about-text-last'>As a homegrown e-commerce organization, we direct our efforts towards building a sustainable business while creating inclusive and impactful growth for all our stakeholders. We believe in transformative innovations and risk-taking.
          <br/>
          We’ve worked very hard towards building a team of seriously cool andtalented people and we want you to know who they are. You can get aglimpse of their style and lives on our website, by signing up for ourmailers or following us on Instagram.</p>
          <Link ><div className='button'><p className='follow-us'>Follow Us</p></div></Link>
        </div>
        <div className="follow-img">
          <img src={Know} alt='Know' height={490} width={290}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default About;