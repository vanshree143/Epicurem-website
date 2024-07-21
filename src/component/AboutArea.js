import React from 'react';
import { Link } from 'react-router-dom';
import about2 from '../Assets/image/about-2.png';
import about3 from '../Assets/image/about-3.png';
import info from '../Assets/image/ceo-img.png';
import sign from '../Assets/image/signature.svg'
import bag1 from '../Assets/image/sp-bag.svg'
import bag2 from '../Assets/image/sp-veg.svg';
const AboutArea = () => {
  return (
    <>
      <div className="aboutArea">
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-6 col-xl-5 ">
                  <div className='position-relative'>
                    <div className="aboutImg">
                        <img src={about2} alt="" />
                    </div>
                    <div className="aboutImg2">
                      <img src={about3} alt="" />
                      <Link className="video" to='https://vimeo.com/225811446'>
                      <i class="fa-solid fa-circle-play"></i>
                      </Link>
                    </div>
                   </div> 
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6">
                  <div className="sectionTitle">
                    <p className='name'>About Us</p>
                    <h2 className='title'>Our Journey to Sweet Success. A Tale of Flour and Sugar</h2>
                  </div>
                  <div className="aboutSection">
                    <p className='mt-4'>Here are many variations of passages of Lorem Ipsum available but majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered alteration.</p>
                    <div className="aboutContent mt-5 d-flex justify-content-between align-items-center">
                      <ul>
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
                    <div className="commonBtn mt-5">
                      <button>Learn More</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <img src={bag1} className='bag1' />
        <img src={bag2} className='bag2' />
      </div>
    </>
  )
}

export default AboutArea;
