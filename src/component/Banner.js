
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import bannerimg1 from '../Assets/image/p-1.png';
import bannerimg2 from '../Assets/image/p-2.png';
import bannerimg3 from '../Assets/image/p-3.png';
import bag5 from '../Assets/image/icon-1.png';

const Banner = () => {
    return (
        <>
            <div className="bannerArea">
                <div className="container">
                    <OwlCarousel className='owl-theme' loop margin={10} nav={true} items={1} >
                    <div class='item'>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6">
                            <div className="bannerInfo text-start">
                                    <h5 className='sub'>WELCOME TO OUR</h5>
                                    <h1 className='bannerTitle'>Epicurean <br />Restaurant & Enjoy Our Food</h1>
                                    <p className='mt-4'>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the starting</p>
                                <Link to="#" className='commonBtn'>
                                    <button>EXPLORE OUR MENU</button>
                                </Link>
                                </div>
                             
                            </div>
                        <div className="col-lg-6">
                            <div className="bannerImg w-100">
                                <img src={bannerimg1} alt="" />
                            </div>                            
                        </div>
                    </div>
                    </div>
                    <div class='item'>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6">
                            <div className="bannerInfo text-start">
                                    <h5 className='sub'>WELCOME TO Epicurean</h5>
                                    <h1 className='bannerTitle'>Epicurean Excellence in Every Bite</h1>
                                    <p className='mt-4'>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the starting</p>
                                <Link to="#" className='commonBtn'>
                                    <button>EXPLORE OUR MENU</button>
                                </Link>
                                </div>                
                            </div>
                        <div className="col-lg-6">
                            <div className="bannerImg w-100">
                                <img src={bannerimg2} alt="" />
                            </div>                            
                        </div>
                    </div>
                    </div>
                    <div class='item'>
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-6">
                            <div className="bannerInfo text-start">
                                    <h5 className='sub'>WELCOME TO OUR</h5>
                                    <h1 className='bannerTitle'>Discover Epicurean Elegance</h1>
                                    <p className='mt-4'>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the starting</p>
                                <Link to="#" className='commonBtn'>
                                    <button>EXPLORE OUR MENU</button>
                                </Link>
                                </div>                
                            </div>
                        <div className="col-lg-6">
                            <div className="bannerImg w-100">
                                <img src={bannerimg3} alt="" />
                            </div>                            
                        </div>
                    </div>
                    </div>
                    </OwlCarousel>
                </div>
                <div className="bag-5">
                    <img src={bag5} alt="" />
                </div>
            </div>
           
        </>
    )
}

export default Banner;
