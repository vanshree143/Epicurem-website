import React from 'react'
import { Link } from 'react-router-dom'

const CoffeeCta = () => {
  return (
    <>
      <div className="coffeeCta overflow-hidden">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-4 col-xl-3 pt-0">
                    <div className="coffeVideo">
                        <h2><Link to='https://vimeo.com/225811446'>
                        <i class="fa-regular fa-circle-play"></i></Link>
                            Intro Video
                        </h2>
                        <svg class="position-absolute arrow-bottom start-50 translate-middle-x" width="244" height="168" viewBox="0 0 244 168" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.2">
							<path d="M243 15.8143C194.862 -12.6709 92.4606 -0.311245 79.6239 54.9212C63.578 123.962 198.266 127.723 198.266 89.6829C198.266 48.1623 31 45.748 31 165" stroke="white"></path>
							<path d="M63.1921 133.853C55.043 134.535 37.1699 141.897 30.8708 165.893C29.8466 156.119 22.6572 135.385 2.09259 130.636" stroke="#E3E3E3"></path>
							</g>
						</svg>
                    </div>
                </div>
                <div className="col-lg-8 col-xl-8">
                    <div className="coffeeInfo">
                        <div className="coffeeSingleInfo">
                            <h2 className='text_color_coffee'>Our Opening Hours</h2>
                            <p className='text_color_coffee mb-0'>Mon - Sat: 07:00 - 18:00</p>
                            <p className='text_color_coffee'>Only Sun: 09:00 - 14:00</p>
                        </div>
                        <div className="coffeeSingleInfo">
                            <h2 className='text_color_coffee'>Our Live Location</h2>
                            <p className='text_color_coffee mb-0'>848 A 28TH ST, Brooklyn</p>
                            <p className='text_color_coffee'>New York, UK</p>
                        </div>
                        <div className="coffeeSingleInfo">
                            <h2 className='text_color_coffee'>Book A Table Now</h2>
                            <p className='text_color_coffee mb-0'>              +1318-254-6849</p>
                            <p className='text_color_coffee'>+1452-754-6579</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CoffeeCta
