import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import Slider from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
import pizza1 from '../Assets/image/hero-pizza-1.png';
import pizza2 from '../Assets/image/hero-pizza-2.png';
import pizza3 from '../Assets/image/hero-pizza-3.png';


const PizzaBanner = () => {
  return (
    <>
      <div className="pizzaBanner">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                    <div className="heroInfo text-center">
                        <h5 className='sub'>WELCOME TO OUR</h5>
                        <h1 className='bannerTitle'>Epicureans Artisanal Pizza Experience</h1>
                    </div>
                </div>
            </div>
            <div className="row justify-content-between mt-5">
                <div className="col-lg-3">
                    <div className="ctaBox">
                        <div className="singleCta">
                            <div className="pizzaImgPagination">
                                <span>Margherita</span>
                                <span>Meatball Mania</span>
                                <span>Vegan BBQ</span>
                            </div>
                        </div>
                        <div className="singleCta">
                            <div className="pizzaInfo">
                            <i class="fa-solid fa-quote-left"></i>
                            <p>The perfect piece of cheesy and dreamy. Taste the magic in every bite.</p>
                            </div>
                        </div>
                        <div className="singleCta">
                            <Link to="#" className='commonBtn bg-orange'>
                                <button>Explore Our Menu</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                <OwlCarousel className='owl-theme' loop margin={10} nav items={1} navText={['<i class="fa-regular fa-square-caret-left"></i>','<i class="fa-regular fa-square-caret-right"></i>']} dots={false}>
                    <div class='item'>
                      <div className="pizzaImg d-flex justify-content-center">
                        <img src={pizza1} alt="" />
                      </div>
                    </div>                   
                    <div class='item'>
                      <div className="pizzaImg d-flex justify-content-center">
                        <img src={pizza2} alt="" />
                      </div>
                    </div>                   
                    <div class='item'>
                      <div className="pizzaImg d-flex justify-content-center">
                        <img src={pizza3} alt="" />
                      </div>
                    </div>                   
                </OwlCarousel>
                </div>
                <div className="col-lg-3 d-none d-lg-block">
                    <div className="ctaBox right">
                        <div className="singleCta">
                            <div className="ctaInfo">
                                <h2>80+</h2>
                                <p>Menu Items For You</p>
                            </div>
                        </div>
                        <div className="singleCta">
                            <div className="ctaInfo">
                                <h2>12+</h2>
                                <p>Years We Serve You</p>
                            </div>
                        </div>
                        <div className="singleCta">
                            <div className="ctaInfo">
                                <h2>100+</h2>
                                <p>Great Master Chef</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PizzaBanner
