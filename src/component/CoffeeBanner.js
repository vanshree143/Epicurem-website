import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import coffeeB1 from '../Assets/image/coffee-hero-1.png';
import coffeeB2 from '../Assets/image/coffee-hero-2.png';
import coffeeB3 from '../Assets/image/coffee-hero-3.png';
import coffeeSp from '../Assets/image/coffee-hero-bg-sp.1.png'

const CoffeeBanner = () => {
    const mystyle={
        color:"#270A05",
        fontSize:"110px",
    };
  return (
    <>
      <div className="coffeeBanner">
        <div className="container">
        <OwlCarousel className='owl-theme' loop margin={10} nav={true} items={1} >
        <div class='item'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6">
                <div className="bannerInfo text-start">
                    <h5 className='sub'>WELCOME TO OUR</h5>
                        <h1 style={mystyle}>Epicurean</h1>
                        <h2>Elevating Your Coffee Experience</h2>
                        <p className='mt-4'>Epicurean embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                        <Link to="#" className='commonBtn coffee'>
                        <button>EXPLORE OUR MENU</button>
                        </Link>
                        </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="bannerImg w-100">
                        <img src={coffeeB1} alt="" />
                    </div>                            
                </div>
            </div>
        </div>
        <div class='item'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6">
                <div className="bannerInfo text-start">
                    <h5 className='sub'>WELCOME TO OUR</h5>
                        <h1 style={mystyle}>Epicurean</h1>
                        <h2>Crafting Your Coffee Elegance</h2>
                        <p className='mt-4'>Epicurean embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                        <Link to="#" className='commonBtn coffee'>
                        <button>EXPLORE OUR MENU</button>
                        </Link>
                        </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="bannerImg w-100">
                        <img src={coffeeB2} alt="" />
                    </div>                            
                </div>
            </div>
        </div>
        <div class='item'>
            <div className="row d-flex justify-content-between">
                <div className="col-lg-6">
                <div className="bannerInfo text-start">
                    <h5 className='sub'>WELCOME TO OUR</h5>
                        <h1 style={mystyle}>Epicurean</h1>
                        <h2>Where Every Cup Tells You Tale</h2>
                        <p className='mt-4'>Epicurean embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey. At Epicurean, we take pride in curating an exceptional coffee experience that transcends the ordinary.</p>
                        <Link to="#" className='commonBtn coffee'>
                        <button>EXPLORE OUR MENU</button>
                        </Link>
                        </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="bannerImg w-100">
                        <img src={coffeeB3} alt="" />
                    </div>                            
                </div>
            </div>
        </div>
        </OwlCarousel>
        </div>
        <div className="coffesp">
            <img src={coffeeSp} alt="" />
        </div>
      </div>
    </>
  )
}

export default CoffeeBanner
