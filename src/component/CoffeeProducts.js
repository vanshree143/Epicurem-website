import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import coffep1 from '../Assets/image/coffee-1.png'
import { Link } from 'react-router-dom';
import { coffeePro } from './Users';

const CoffeeProducts = (Props) => {
    const {image,carticon,addcart,view,info,price,minus,number,plus}=Props;

    const responsive = {
        0: {
          items: 1,
        },
        600: {
          items:1,
        },
        
        1000: {
          items: 4,
        },
       
      };
  return (
    <>
      <div className="coffeeProductsArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="sectionTitle">
                    <h2 className='title' style={{color:"#270A05"}}>We Offer You Our Best Products</h2>
                    <p className='ms-0 mt-3' style={{color:"#270A0599"}}>Epicurean embodies our commitment to transforming the simple act of sipping coffee into a refined and memorable journey.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                <OwlCarousel className='owl-theme' loop margin={10} nav items={4} responsive={responsive}>
                {
                    coffeePro?.map((items)=>{
                        return(
                            <div class='item'>
                        <div className="coffeeProBox">
                            <div className="coffeeProImg">
                                <img src={items.image} alt="" className='w-100' />
                                <div className="pizzaProductHover d-flex justify-content-between text-center flex-column">
                                <div className="carticon">
                                {items.carticon}
                                <h4 className='mt-3'><Link to='#'>{items.addcart}</Link></h4>
                                </div>
                                <Link to='#' className='view'>{items.view}</Link>
                            </div>
                            </div>
                            <div className="coffeeProInfo">
                                <h2 className='proTitle'>{items.info}</h2>
                                <div className="coffeeProPrice d-flex justify-content-between">
                                    <h2 className='text_color_coffee fs-4'>{items.price}</h2>
                                    <div className="numberInput pe-2">
                                        <span>{items.minus}</span>
                                        <h6 style={{color:"#270A05"}}>{items.number}</h6>
                                        <span>{items.plus}</span>
                                    </div>
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
      </div>
    </>
  )
}

export default CoffeeProducts
