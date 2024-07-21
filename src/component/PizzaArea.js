import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import prod1 from '../Assets/image/special-pizza-1.png'
import { Link } from 'react-router-dom';
import pizabag from '../Assets/image/frame.png'
import { pizzaslider } from './Users';

const PizzaArea = (Props) => {
    const {image,carticon,addcart,view,pizzainfo,rating,price,oldprice}=Props;

    const responsive = {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        
        1000: {
          items: 4,
        },
        1200:{
            items:4,
        }
      };
  return (
    <>
      <div className="pizzaArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 ps-0">
                    <div className="sectionTitle">
                        <p>Special Deals</p>
                        <h2 className='title'>Our Featured Deals</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                <OwlCarousel className='owl-theme' loop margin={10} nav items={4} responsive={responsive}>

                {
                    pizzaslider?.map((item) =>{
                        return(
                            <div class='item'>
                       <div className="pizzaProductBox">
                        <div className="pizzaImg position-relative">
                            <img src={item.image} alt="" className="w-100" />
                            <div className="pizzaProductHover d-flex justify-content-between text-center flex-column">
                                <div className="carticon">
                               {item.carticon}
                                <h4 className='mt-3'><Link to='#'>{item.addcart}</Link></h4>
                                </div>
                                <Link to='#' className='view'>{item.view}</Link>
                            </div>
                        </div>
                        <div className="pizzaInfo mt-4">
                            <h4>{item.pizzainfo}</h4>
                            <div className="rating mt-3 mb-3">
                                   <span>{item.rating}</span>
                                   <span>{item.rating}</span>
                                   <span>{item.rating}</span>
                                   <span>{item.rating}</span>
                                   <span>{item.rating}</span>
                                </div>
                                <div className="price d-flex">
                                <h3 className='fs-3 fw-bold'>{item.price}</h3>
                                <span className='ms-3 mt-2'><del>{item.oldprice}</del></span>
                            </div>
                        </div>
                       </div>
                    </div>     
                        )
                    })
                }
                                  
                </OwlCarousel>
                </div>
            </div>
        </div>
        <div className="pizzabag">
            <img src={pizabag} alt="" />
        </div>
      </div>
    </>
  )
}

export default PizzaArea
