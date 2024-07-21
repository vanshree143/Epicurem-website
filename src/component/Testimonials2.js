import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import cardimg from '../Assets/image/card-1.png'
import ani1 from '../Assets/image/ani-1.svg';
import ani2 from '../Assets/image/ani-2.svg';

const Testimonials2 = () => {
  return (
    <>
      <div className="testimonialsArea">
        <div className="container">
              <div className="row">
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <p className='name'>Testimonials</p>
                        <h2 className='title'>What Client Says</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-12">
              <OwlCarousel className='owl-theme' loop margin={10} nav={false} items={1}>
                  <div class='item'>
                  <div className='testCard'>
                      <div className="testiCardImg">
                        <img src={cardimg} alt="" />
                      </div>
                      <div className="testCardInfo mt-3">
                        <p>Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered</p>
                        <h4 className='h4'>Amanda Morton</h4>
                        <p>Head Manager, Slack</p>
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
                  <div class='item'>
                  <div className='testCard'>
                      <div className="testiCardImg">
                        <img src={cardimg} alt="" />
                      </div>
                      <div className="testCardInfo mt-3">
                        <p>Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered</p>
                        <h4 className='h4'>Amanda Morton</h4>
                        <p>Head Manager, Slack</p>
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
                  <div class='item'>
                  <div className='testCard'>
                      <div className="testiCardImg">
                        <img src={cardimg} alt="" />
                      </div>
                      <div className="testCardInfo mt-3">
                        <p>Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered</p>
                        <h4 className='h4'>Amanda Morton</h4>
                        <p>Head Manager, Slack</p>
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
        <div className="ani1">
            <img src={ani1} alt="" />
        </div>
        <div className="ani2">
            <img src={ani2} alt="" />
        </div>
      </div>
    </>
  )
}

export default Testimonials2
