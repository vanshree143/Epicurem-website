import React from 'react';
import about1 from '../Assets/image/about-two.png';
import aboutsp from '../Assets/image/about-bg-sp.png';
import plat from '../Assets/image/plate.svg';
import chef from '../Assets/image/chef.svg';


const About2Area = () => {
  return (
    <>
      <div className="about2Area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="aboutImgWrap">
                <img src={about1} alt="" />
                <div className="aboutCta2">
                  <h4 className='number'>24+</h4>
                  <p className='fs-6 text-black'>Years We Serving</p>
                </div>
                <div className="aboutSp">
                  <img src={aboutsp} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xl-7">
              <div className="sectionTitle">
                <p className='name'>About Us</p>
                <h2 className='title mt-2 mb-4'>On Every Special Occasion We Serve You First</h2>               
              </div>
              <div className="aboutContnt">
               <p>Here are many variations of passages of Lorem Ipsum available but majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered alteration.</p>
               <div className="abotWrap position-relative mt-4">
                <div className="aboutWrapInfo d-flex flex-column flex-sm-row align-items-center">
                  <img src={plat} alt="" />
                  <div className="infoDetails">
                    <h4>Fine Dining</h4>
                    <p>You need to be sure there isn't the middle of <br /> text.</p>
                  </div>
                </div>
                <div className="aboutWrapInfo d-flex flex-column flex-sm-row align-items-center">
                  <img src={chef} alt="" />
                  <div className="infoDetails">
                    <h4>Master Chef</h4>
                    <p>You need to be sure there isn't the middle of <br /> text.</p>
                  </div>
                </div>
               </div>
               <ul className="cheakList mt-3 ps-0">
                <li><i class="fa-regular fa-circle-check"></i>
                    Prioritize whole, unprocessed foods
                </li>
                <li><i class="fa-regular fa-circle-check"></i>
                    a wide range of colorful fruits and vegetables
                </li>
                <li><i class="fa-regular fa-circle-check"></i>
                    Enjoy treats in moderation
                </li>                
               </ul>
               <div className="commonBtn2 mt-5">
                  <button>Learn More</button>
               </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About2Area
