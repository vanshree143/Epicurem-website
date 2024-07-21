import React from 'react';
import coffee1 from '../Assets/image/coffee-about.png'
import coffee2 from '../Assets/image/cup-coffee.png'
import spoon from '../Assets/image/about-spoon.png'

const CoffeeAbout = () => {
  return (
    <>
    <div className="coffeeAbout">
        <div className="container">
            <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-xl-5">
                    <div className="coffeeImgBox position-relative">
                        <img src={coffee1} alt="" className='w-100'/>
                        <img src={coffee2} alt="" className='cupCoffee d-none d-lg-block'/>
                    </div>
                </div>
                <div className="col-lg-7 col-xl-6">
                    <div className="sectionTitle section">
                        <p>About Us</p>
                        <h2 className='title mt-2' style={{color:"#86371C"}}>Passion for Coffee, Dedication to Excellence</h2>
                    </div>
                    <div className="aboutContent mt-4">
                        <p>Our journey begins with an unwavering love for the art and science of coffee cultivation, roasting, and brewing.</p>
                        <div className="aboutContentWrap d-flex justify-content-between pt-3 pb-3  position-relative flex-column flex-sm-row">
                        <div className='aboutSingle d-flex flex-column flex-sm-row'>
                        <i class="fa-solid fa-house-chimney"></i>
                        <div className="contentInfo ms-3">
                            <h4>Coffee Shop</h4>
                            <p>At Epicurean, we don't just view coffee as a beverage</p>
                        </div>
                        </div>
                        <div className='aboutSingle d-flex flex-column flex-sm-row'>
                        <i class="fa-solid fa-house-chimney"></i>
                        <div className="contentInfo ms-3">
                            <h4>Coffee Shop</h4>
                            <p>At Epicurean, we don't just view coffee as a beverage</p>
                        </div>
                        </div>
                        </div>
                        <p>Our journey begins with an unwavering love for the art and science of coffee cultivation, roasting, and brewing.</p>
                        <div className="commonBtn orange mt-4">
                            <button>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="spoon">
            <img src={spoon} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default CoffeeAbout
