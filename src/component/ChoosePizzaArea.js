import React from 'react'
import pizzaimg from '../Assets/image/pizza.img.1.png';
import onion from  '../Assets/image/onion.png';
import leaf from  '../Assets/image/leaf.png';


const ChoosePizzaArea = () => {
  return (
    <>
      <div className="chooseArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="sectionTitle text-center">
                        <p>Why Choose Us</p>
                        <h2 className='title'>Choose The Best Pizza</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5 d-flex justify-content-between">
                <div className="col-lg-4 col-xl-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="chooseBox">
                                <span className='ms-5'><i class="fa-solid fa-podcast"></i></span>
                                <div className="chooseInfo ">
                                    <h4>The Highest Quality</h4>
                                    <p>Here are many variations of passages of Lorem Ipsum available but</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="chooseBox">
                                <span className='ms-5'><i class="fa-solid fa-bell-concierge"></i></span>
                                <div className="chooseInfo">
                                    <h4>The Highest Quality</h4>
                                    <p>Here are many variations of passages of Lorem Ipsum available but</p>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
                <div className="col-lg-4 col-xl-5">
                    <div className="chooseImg d-flex justify-content-center align-items-center position-relative overflow-hidden">
                        <img src={pizzaimg} alt="" />
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                    <div className="row">
                        <div className="col-12">
                            <div className="chooseBox">
                                <span className='ms-5'><i class="fa-solid fa-mortar-pestle"></i></span>
                                <div className="chooseInfo ">
                                    <h4>The Best Ingredients</h4>
                                    <p>Here are many variations of passages of Lorem Ipsum available but</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="chooseBox">
                                <span className='ms-5'><i class="fa-solid fa-bowl-food"></i></span>
                                <div className="chooseInfo">
                                    <h4>Well Cooked Food</h4>
                                    <p>Here are many variations of passages of Lorem Ipsum available but</p>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </div>
        <div className="onion">
            <img src={onion} alt="" />
        </div>
        <div className="leaf">
            <img src={leaf} alt="" />
        </div>
      </div>
    </>
  )
}

export default ChoosePizzaArea
