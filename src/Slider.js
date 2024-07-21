import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {
  return (
    <div>
      <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={1} dots={false}>
        <div class='item'>
          <img src="https://www.leadsmarttech.com/wp-content/uploads/LeadSmart-hero-2.jpg" alt="" />
        </div>
        <div class='item'>
          <img src="https://ifranchise.ph/wp-content/uploads/2016/07/Business-Papers-Philippines.jpg" alt="" />
        </div>
        <div class='item'>
          <img src="https://assets.entrepreneur.com/providers/stocknews/hero-image-stocknews-441938.jpeg" alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slider;
