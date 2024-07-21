import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import test1 from '../Assets/image/test-1.png';
import test2 from '../Assets/image/test-2.png';
import ani1 from '../Assets/image/ani-1.svg';
import ani2 from '../Assets/image/ani-2.svg';


const Testimonial = () => {
  return (
    <>
      <div className="testimonialArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <p className='name'>Testimonials</p>
                        <h2 className='title'>What Client Says</h2>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center text-center">
                <div className="col-lg-8">
                <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={1} dots={true}>
                    <div class='item text-center'>
                        <div className="testSingle">
                            <div className="testImg">
                                <img src={test1}   />
                            </div>
                            <div className="testInfo">
                                <h4 className='title2'>Amanda Morton</h4>
                                <p>Head Manager, Slack</p>
                                <div className="rating text-center">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <p className="testDec">
                                    <span className='quate-top'><i class="fa-solid fa-quote-left"></i></span>
                                    Everything was so nice. Food was really great as they say. Easy to order, great service, and whole environment was very unique. Happy to make a visit in Epicurean.
									<span className='quate-bootom'><i class="fa-solid fa-quote-right"></i></span>		
											
                               </p>
                            </div>
                        </div>
                    </div>
                    <div class='item text-center'>
                        <div className="testSingle">
                            <div className="testImg">
                                <img src={test2}   />
                            </div>
                            <div className="testInfo">
                                <h4 className='title2'>Amanda Morton</h4>
                                <p>Head Manager, Slack</p>
                                <div className="rating text-center">
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                    <span><i class="fa-solid fa-star"></i></span>
                                </div>
                                <p className="testDec">
                                    <span className='quate-top'><i class="fa-solid fa-quote-left"></i></span>
                                    Everything was so nice. Food was really great as they say. Easy to order, great service, and whole environment was very unique. Happy to make a visit in Epicurean.
									<span className='quate-bootom'><i class="fa-solid fa-quote-right"></i></span>		
											
                               </p>
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

export default Testimonial
