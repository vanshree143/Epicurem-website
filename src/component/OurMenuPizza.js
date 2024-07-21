import React from 'react'
import { MenuBook, pizzaMenu } from './Users';
import pizzasp from '../Assets/image/pizza-sp.png'

const OurMenuPizza = (Props) => {
    const { image, menuTitle, menuInfo, menuPrice } = Props;
  return (
    <>
      <div className="pizzaMenuArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="sectionTitle text-center">
                        <p>Our Main Menu</p>
                        <h2 className='title mt-3'>Choose The Best Pizza</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="tabContent2 mt-5">
                        <div className="tabPads">
                            <div className="menuBook">
                            {
                                        pizzaMenu?.map((item) => {
                                                return (
                                                    
                                                    <div className="menuBookBox">
                                                        <div className="menuBookInfo d-flex justify-content-between">
                                                            <div className="menuBookImg">
                                                                <img src={item.image} alt="" />
                                                            </div>
                                                            <div className="menuInfo">
                                                                <h4>{item.menuTitle}</h4>
                                                                <p>{item.menuInfo}</p>
                                                            </div>
                                                        </div>
                                                        <div className="dots"></div>
                                                        <div className="menuBookPrice">
                                                            <h2>{item.menuPrice}</h2>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 text-center">
                    <div className="commonBtn orange">
                        <button>View All Menu</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="pizzaSp">
            <img src={pizzasp} alt="" />
        </div>
      </div>
    </>
  )
}

export default OurMenuPizza
