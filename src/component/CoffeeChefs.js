import React from 'react'
import { coffeeChefs } from './Users';
import { Link } from 'react-router-dom';

const CoffeeChefs = (Props) => {
    const {image,facebook,linkdin,pintrest,chefName} = Props;
  return (
    <>
      <div className="coffeeChefs">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className=" text-center text-white">
                        
                        <p>Our Team</p>
                        <h2 className='title text-white'>Our Main Coffee Makers</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {
                    coffeeChefs?.map((item)=>{
                        return(
                            <div className="col-lg-4 col-md-6">
                         <div className="pizzaBox">
                        <div className="pizzaChefImg position-relative">
                            <img src={item.image} alt="" />
                            <div className="pizzaHover">
                                <ul className='social'>
                                    <li><Link to='#'>{item.facebook}</Link></li>
                                    <li><Link to='#'>{item.pintrest}</Link></li>
                                    <li><Link to='#'>{item.linkdin}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="chefName text-center mt-3 ">
                            <h4 className='text-white'>{item.chefName}</h4>
                        </div>
                    </div>
                </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default CoffeeChefs
