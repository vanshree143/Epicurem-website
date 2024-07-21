import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import hero1bg from '../Assets/image/hero-two-bg-1.jpg'

const Hero2slider = () => {
  return (
    <>
      <div className="hero2SliderArea">
        <div className="container-fluid p-0 m-0">
        <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={1} dots={false}>
          <div class='item'>
              <div className="heroImg">
                {/* <img src={hero1bg} alt="" /> */}
                <div className="row justify-content-center">
                  <div className="col-lg-6 ">
                    <div className="heroInfo text-white text-center">
                      <span className='fw-bold'>Feeling Hungry? Let’s</span>
                      <h1>Discover Divine Taste Of Epicurean</h1>
                      <div className="commonBtn mt-5">
                        <button>BOOK TABLE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div class='item'>
              <div className="heroImg2">
                {/* <img src={hero1bg} alt="" /> */}
                <div className="row justify-content-center">
                  <div className="col-lg-6 ">
                    <div className="heroInfo text-white text-center">
                      <span className='fw-bold'>Feeling Hungry? Let’s</span>
                      <h1>Discover Divine Taste Of Epicurean</h1>
                      <div className="commonBtn mt-5">
                        <button>BOOK TABLE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
   
</OwlCarousel>
        </div>
      </div>
          
    </>
  )
}

export default Hero2slider
