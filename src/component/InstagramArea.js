import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../Assets/image/instagram-1.png'
import img2 from '../Assets/image/instagram-2.png'
import img3 from '../Assets/image/instagram-3.png'
import img4 from '../Assets/image/instagram-4.png'
import img5 from '../Assets/image/instagram-5.png'
import img6 from '../Assets/image/instagram-6.png'

const InstagramArea = () => {
    const responsive = {
        0: {
          items: 2,
        },
        600: {
          items: 2,
        },
        700: {
          items: 3,
        },
        1000: {
          items: 5,
        },
        1200: {
          items: 6,
        },
      };
   
  return (
    <>
      <div className="instagaramArea pb-2">
        <div className="container-fluid ps-0 pe-0">
            <div className="row">
                <div className="col-lg-12">
                <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={6} responsive={responsive} dots={false}>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img1} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img2} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img3} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img4} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img5} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                    <div class='item'>
                    <div className="SliderImgWrap">
                        <div className="sliderImg">
                        <img src={img6} alt="" />
                        <div className="instaIcon">
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                        </div>                    
                    </div>
                 
                </OwlCarousel>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default InstagramArea
