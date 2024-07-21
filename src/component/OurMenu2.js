import React from 'react'
import book1 from '../Assets/image/menu-book-1.png'
import book2 from '../Assets/image/menu-book-2.png'
import book3 from '../Assets/image/menu-book-3.png'
import book4 from '../Assets/image/menu-book-4.png'
import book5 from '../Assets/image/menu-book-5.png'
import book6 from '../Assets/image/menu-book-6.png'
import book7 from '../Assets/image/menu-book-7.png'
import book8 from '../Assets/image/menu-book-8.png'
import bag4 from '../Assets/image/sp-corn.svg';
import { MenuBook } from './Users';


const OurMenu2 = (Props) => {
    const { image, menuTitle, menuInfo, menuPrice } = Props;
  return (
    <>
      <div className="ourMenu2Area">
        <div className="container">
            <div className="row">
            <div className="col-lg-12">
                    <div className="subTitle text-center">
                        <p className='name'>Menu Book</p>
                        <h2 className='title'>Our Main Menu</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <ul className="navPills mt-4">
                        <li className='navItem'>Starters</li>
                        <li className='navItem'>Main</li>
                        <li className='navItem'>Salads</li>
                        <li className='navItem'>Dessert</li>
                    </ul>
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
        <img src={bag4} className='bag4' />
      </div>
    </>
  )
}

export default OurMenu2
