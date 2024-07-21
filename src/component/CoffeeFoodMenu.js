import React from 'react'
import { CoffeeMenu } from './Users';
import foodsp  from '../Assets/image/food-menu-sp.png'

const CoffeeFoodMenu = (Props) => {
    const { image, menuTitle, menuInfo, menuPrice } = Props;
  return (
    <>
      <div className="coffeeFoodMenu">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">               
                    <p style={{color:"#86371C"}}>Coffee Menu</p>
                    <h2 className='title' style={{color:"#86371C"}}>Epicureans Coffee Menu</h2>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-lg-12">
                <div className="tabContent2 mt-5">
                    <div className="tabPads">
                    <div className="menuBook">

                     {
                        CoffeeMenu?.map((item) => {
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
                                 <div className="dots" style={{color:"#86371C"}}></div>
                                <div className="menuBookPrice">
                                <h2 style={{color:"#86371C"}}>{item.menuPrice}</h2>
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
            <div className="row mt-4">
                <div className="col-lg-12 text-center">
                    <div className="commonBtn coffee">
                        <button>View All Menu</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="foodSp">
            <img src={foodsp} alt="" />
        </div>
      </div>
    </>
  )
}

export default CoffeeFoodMenu
