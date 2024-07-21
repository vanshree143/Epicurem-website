import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import foodslide1 from '../Assets/image/menu-2.png'
import foodslide2 from '../Assets/image/menu-1.png'
import foodslide3 from '../Assets/image/food-slide-2.png'
import foodslide4 from '../Assets/image/food-slide-4.png'


const FoodSlider = () => {
  const responsive = {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 5,
    },
    1000: {
      items: 7,
    },
    1200: {
      items: 7,
    },
  };
  return (
    <>
      <div className="foodSlider">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="foodSlideWrap">
                    <div className="foodSlide">
                    <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={7} dots={false} responsive={responsive}>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide1} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide2} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide3} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide4} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide1} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide2} alt="" />
                          </div>
                        </div>
                        <div class='item'>
                          <div className="foodImgWrap">
                            <img src={foodslide3} alt="" />
                          </div>
                        </div>
                      
                    </OwlCarousel>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default FoodSlider
