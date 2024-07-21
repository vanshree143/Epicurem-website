import React from 'react'
import { MenuBook } from './Users';


const FoodMenuBook = (Props) => {
    const { image, menuTitle, menuInfo, menuPrice } = Props;
    return (
        <>
            <div className="ourMenu2Area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subTitle text-center">
                                <p className='name'>Menu Book</p>
                                <h2 className='title'>Enjoy Breakfast Menu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabContent2 mt-5">
                                <div className="tabPads">
                                    <div className="menuBook">

                                        {
                                            MenuBook?.map((item) => {
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
                </div>
            </div>
        </>
    )
}

export default FoodMenuBook
