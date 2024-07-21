import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import author from '../Assets/image/coffee-testimonial-1.png'
import coffeani1 from '../Assets/image/coffeeani1.png'

const CoffeePro = () => {
    const responsive={
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
            items: 2,
          },
    };     
  return (
    <>
        <div className="coffeeProduct">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="sectionTitle section">
                            <p>Our Testimonial</p>
                            <h2 className="title mt-2" style={{color:"#86371C"}}>What Our Clients Says</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <OwlCarousel className='owl-theme' loop margin={10} nav items={2} responsive={responsive}>
                        <div class='item'>
                            <div className="coffeeTestBox">
                            <div className="coffeeTestInfo">
                                <h5 className='text_color_coffee'>"Epicurean has become my daily escape into a world of exquisite coffee. The team's dedication of delivering a top-notch experience is evident in every cup. They have turned me into a coffee enthusiast!"</h5>
                            </div>
                            <div className="coffeeTestAuthorBox mt-4">
                                <div className='authorImg'>
                                <img src={author} alt="" className='flex-shrink-0'/>
                                </div>
                                <div className="authorInfo">
                                    <h5 className='text_color_coffee title fs-4'>Sophia Taylor</h5>
                                    <div className="rating">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    </div>
                                    <p className='text_color_coffee'>Co-Leader</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="coffeeani1">
                <img src={coffeani1} alt="" />
            </div>
        </div>
      
    </>
  )
}

export default CoffeePro
