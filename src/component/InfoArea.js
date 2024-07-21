import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dis1 from '../Assets/image/discount-1.jpg';
import dis2 from '../Assets/image/discount-2.jpg';
import dis3 from '../Assets/image/discount-3.jpg';

const InfoArea = () => {
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  };
  return (
    <>
      <div className="infoArea pb-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 ps-0 ms-0 pe-0 me-0">
                <OwlCarousel className='owl-theme p-0 m-0' loop margin={10} nav={false} responsive={responsive}>
                <div class='item'>
                    <div className="discontBox">
                    <img src={dis1} alt="" />
                        <div className="discountInfo text-center">
                          <span className='category'>10%</span>
                          <p className='name'>Main Course</p>
                          <h4 className='text-white'>Hot Spicy Ramen</h4>
                          <p className='text-white'>Chicken, Shrimp, Tofu, olive oil, butter.</p>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className="discontBox">
                    <img src={dis2} alt="" />
                        <div className="discountInfo text-center">
                         
                          <p className='name'>Main Course</p>
                          <h4 className='text-white'>Hot Spicy Ramen</h4>
                          <p className='text-white'>Chicken, Shrimp, Tofu, olive oil, butter.</p>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className="discontBox">
                    <img src={dis3} alt="" />
                        <div className="discountInfo text-center">
                     
                          <p className='name'>Main Course</p>
                          <h4 className='text-white'>Hot Spicy Ramen</h4>
                          <p className='text-white'>Chicken, Shrimp, Tofu, olive oil, butter.</p>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className="discontBox">
                    <img src={dis1} alt="" />
                        <div className="discountInfo text-center">
                          <span className='category'>10%</span>
                          <p className='name'>Main Course</p>
                          <h4 className='text-white'>Hot Spicy Ramen</h4>
                          <p className='text-white'>Chicken, Shrimp, Tofu, olive oil, butter.</p>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className="discontBox">
                    <img src={dis2} alt="" />
                        <div className="discountInfo text-center">
                         
                          <p className='name'>Main Course</p>
                          <h4 className='text-white'>Hot Spicy Ramen</h4>
                          <p className='text-white'>Chicken, Shrimp, Tofu, olive oil, butter.</p>
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

export default InfoArea
