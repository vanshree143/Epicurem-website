import React from 'react'
import pManager from '../Assets/image/pizza-manager.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ani1 from '../Assets/image/ani-1.svg';
import ani2 from '../Assets/image/ani-2.svg';



const PizzaTestimonial = () => {
  return (
    <>
      <div className="pizzaTestimonial">
        <div className="container">
            <div className="row text-start">
                <div className="col-lg-7">
                    <div className="sectionTitle">
                        <p>Our Testimonial</p>
                        <h2 className='title'>Our Featured Deals</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-5">
                    <div className="pizzaMangerImg text-lg-end">
                        <img src={pManager} alt="" />
                    </div>
                </div>
                <div className="col-lg-7">
                <OwlCarousel className='owl-theme' loop margin={10} nav items={1}>
                    <div class='item'>
                        <div className="pizzaTestInfo">
                            <p className='text'>"Epicurean has become my daily escape into a world of exquisite coffee. The team's dedication of delivering a top-notch experience is evident in every cup. They have turned me into a coffee enthusiast!"</p>
                            <div className="pizzaAuthorBox d-flex justify-content-between">
                              <div>
                              <h4>Mia Anderson</h4>
                                <p>Client From Envato</p>
                              </div>
                                <div className="rating">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
                </div>
            </div>
        </div>
        <div className="ani1 d-none d-lg-block">
            <img src={ani1} alt="" />
        </div>
        <div className="ani2 d-none d-lg-block">
            <img src={ani2} alt="" />
        </div>
      </div>
    </>
  )
}

export default PizzaTestimonial
