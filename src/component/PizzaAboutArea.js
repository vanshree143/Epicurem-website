import React from 'react'
import info from '../Assets/image/ceo-img.png';
import sign from '../Assets/image/signature.svg';
import pizzaabout1 from '../Assets/image/about-img-1.png';
import pizzaabout2 from '../Assets/image/about-img-2.png';
import { Link } from 'react-router-dom';
import bag2 from '../Assets/image/sp-veg.svg';

const PizzaAboutArea = () => {
  return (
    <>
        <div className="pizzaAbout">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-6 col-xl-6">
                    <div className="sectionTitle">
                    <p>About Us</p>
                    <h2 className='title mt-3'>Epicurean Pizzeria, Where Flavor Meets Artistry</h2>
                  </div>
                  <div className="aboutSection">
                    <p className='mt-4'>Here are many variations of passages of Lorem Ipsum available but majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered alteration.</p>
                    <div className="aboutContent mt-5 d-flex justify-content-between align-items-center">
                      <ul className='ps-0'>
                        <li><i class="fa-regular fa-circle-check"></i>
                        <b className='ms-2'>cozy Ambiance and Savor</b>
                        </li>
                        <li className='mt-2'><i class="fa-regular fa-circle-check"></i>
                        <b className='ms-2'>Tasty Culinary For Food Lovers</b>
                        </li>
                      </ul>
                      <div className='d-lg-flex'>
                      <div className="infoSingle ps-5">
                        <img src={info} alt="" />
                      </div>
                      <div className="infoDetails">
                        <img src={sign} alt="" />
                        <p className='fs-7 mt-2 fw-bold'>Founder & CEO</p>
                      </div>
                      </div>
                    </div>
                    <div className="commonBtn orange mt-5">
                      <button>know More</button>
                    </div>
                  </div>
                    </div>
                    <div className="col-lg-6 col-xl-5 ">
                  <div className='position-relative'>
                    <div className="aboutImg">
                        <img src={pizzaabout1} alt="" />
                    </div>
                    <div className="pAboutImg2">
                      <img src={pizzaabout2} alt="" />
                      <Link className="video" to='https://vimeo.com/225811446'>
                      <i class="fa-solid fa-circle-play"></i>
                      </Link>
                    </div>
                   </div> 
                </div>
                </div>
            </div>
            <img src={bag2} className='bag2' />
        </div>
      
    </>
  )
}

export default PizzaAboutArea
