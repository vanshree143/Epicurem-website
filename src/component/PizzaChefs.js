import React from 'react'
import pchef1 from '../Assets/image/pizza-chef-1.png'
import { Link } from 'react-router-dom'
import { pizzaChefs } from './Users';

const PizzaChefs = (Props) => {
    const {image,facebook,linkdin,pintrest,chefName} = Props;
  return (
    <>
      <div className="pizzaChefs">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="sectionTitle text-center">
                        <p>Master Chefs</p>
                        <h2 className='title mt-3'>Our Professional Chefs</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                    {
                        pizzaChefs?.map((item)=>{
                            return(
                        <div className="col-lg-3 col-md-6">
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
                        <div className="chefName text-center mt-3">
                            <h4>{item.chefName}</h4>
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

export default PizzaChefs
