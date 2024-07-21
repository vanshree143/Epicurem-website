import React from 'react';
import icon1 from '../Assets/image/icon-food-1.svg'
import icon2 from '../Assets/image/icon-food-2.svg'
import icon3 from '../Assets/image/icon-food-3.svg'
import icon4 from '../Assets/image/icon-food-4.svg'

const VisitArea = () => {
  return (
    <>
      <div className="visitArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="sectionTitle">
                        <p className='name m-0'>Why Visit Us</p>
                        <h2 className='title mt-2'>We Provide Organic Food & Best Facilities</h2>
                        <p className='m-0'>Here are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form from injected humour, or randomized words which don't looking even slightly believable. If you are going have suffered</p>
                        <ul className='mt-4 m-0 p-0'>
                        <li><i class="fa-regular fa-circle-check"></i>
                        <b className='ms-2'>cozy Ambiance and Savor</b>
                        </li>
                        <li className='mt-2'><i class="fa-regular fa-circle-check"></i>
                        <b className='ms-2'>Tasty Culinary For Food Lovers</b>
                        </li>
                      </ul>
                      <div className="commonBtn mt-4">
                        <button>Learn More</button>
                      </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="visitBox">
                                <img src={icon1} alt="" />
                                <h2 className='title fs-3 mt-3'>Quality Ingredients</h2>
                                <p>Tasteful and seem-less renovation, this home is a unique refreshing.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="visitBox">
                                <img src={icon2} alt="" />
                                <h2 className='title fs-3 mt-3'>Quality Ingredients</h2>
                                <p>Tasteful and seem-less renovation, this home is a unique refreshing.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="visitBox">
                                <img src={icon3} alt="" />
                                <h2 className='title fs-3 mt-3'>Quality Ingredients</h2>
                                <p>Tasteful and seem-less renovation, this home is a unique refreshing.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="visitBox">
                                <img src={icon4} alt="" />
                                <h2 className='title fs-3 mt-3'>Quality Ingredients</h2>
                                <p>Tasteful and seem-less renovation, this home is a unique refreshing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default VisitArea
