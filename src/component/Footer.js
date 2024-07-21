import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../Assets/image/footer-blog.png';
import footerlogo from "../Assets/image/logo-2.svg";


const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-2 col-md-6">
                    <div className="footerBox">
                        <h2 className='footerTitle text-white'>Product</h2>
                        <ul className="footerList ms-0 ps-0">
                            <li><Link to='#'>Breakfast</Link></li>
                            <li><Link to='#'>Lunch</Link></li>
                            <li><Link to='#'>Desserts</Link></li>
                            <li><Link to='#'>Dinner</Link></li>
                            <li><Link to='#'>Book a table</Link></li>
                            <li><Link to='#'>Our Chefs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="footerBox">
                        <h2 className='footerTitle text-white'>Information</h2>
                        <ul className="footerList ms-0 ps-0">
                            <li><Link to='#'>FAQ</Link></li>
                            <li><Link to='#'>Blog</Link></li>
                           <li><Link to='#'>Support</Link></li>                        
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="footerBox">
                        <h2 className='footerTitle text-white'>Company</h2>
                        <ul className="footerList ms-0 ps-0">
                            <li><Link to='#'>About us</Link></li>
                            <li><Link to='#'>Our Menu</Link></li>
                            <li><Link to='#'>Contact us</Link></li>
                            <li><Link to='#'>Epicurean</Link></li>                           
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                  <div className="footerBox">
                    <div className="footerSub">
                      <div className="footerSubImg position-relative">
                        <img src={footerimg} alt="" />
                        <div className="sectionTitle text-white">
                          <p>Subscribe</p>
                          <h2 className='title text-white'>Our News letter</h2>
                          <p>To Get Regular Update</p>
                        </div>
                      </div>
                      <form className='footerSubForm d-flex justify-content-between align-items-center'>
                        <input type="email" placeholder='Enter Your Mail' className='input' />
                        <button className='commonBtn ms-4'>Subscibe</button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
            <hr />
            <div className="row d-flex justify-content-between align-items-center mt-4">
              <div className="col-lg-4 text-center text-lg-start">
                <div className="footerLogo">
                  <img src={footerlogo} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <ul className="footerMenu  d-flex justify-content-center mt-3">
                  <li><Link to='#'>Terms</Link></li>
                  <li><Link to='#'>Privacy</Link></li>
                  <li><Link to='#'>Cookies</Link></li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="socialList d-flex justify-content-center justify-content-lg-end align-items-center">
                  <li><Link to='#'><i class="fa-brands fa-facebook-f"></i></Link></li>
                  <li><Link to='#'><i class="fa-brands fa-linkedin-in"></i></Link></li>
                  <li><Link to='#'><i class="fa-brands fa-instagram"></i></Link></li>
                  
                </ul>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
