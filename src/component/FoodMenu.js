import React from 'react'
import menu1 from '../Assets/image/menu-1.png';
import menu2 from '../Assets/image/menu-2.png';
import menu3 from '../Assets/image/menu-3.png';
import menu4 from '../Assets/image/menu-4.png';
import bag3 from '../Assets/image/sp-drinks.svg';
import bag4 from '../Assets/image/sp-corn.svg';
import { ourMenu } from './Users';

const FoodMenu = (Props) => {
        const {image,menuName,quntity,price,content,btn}=Props;
  return (
    <>
      <div className="foodMenu">
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
                        <li className='navItem'>Lunch</li>
                        <li className='navItem'>Breakfast</li>
                        <li className='navItem'>Dinner</li>
                        <li className='navItem'>Snacks</li>
                    </ul>
                    <div className="tabContent">
                        <div className="row">

                        {
                            ourMenu?.map((item) =>{
                                return(
                                    <div className="col-xl-3 col-md-6">
                                <div className="foodMenuInfo">
                                    <div className="foodImg">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h2 className="foodMenuTitle">
                                    {item.menuName}
                                    </h2>
                                    <p className='quntity'>{item.quntity}</p>
                                    <h2 className='foodMenuPrice'>{item.price}
                                    </h2>
                                    <p>{item.content}</p>
                                    <div className="commonBtn mt-5">
                                    <button>{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                        }
                        </div>
                        <div className="row">
                            <div className="col-lg-12 text-center mt-4">
                            <div className="commonBtn2 mt-5">
                            <button>View More</button>
                             </div>
                            </div>
                        </div>                      
                    </div>                                    
                </div>
            </div>
        </div>
            <img src={bag3} className='bag3' />
            <img src={bag4} className='bag4' />
      </div>
    </>
  )
}

export default FoodMenu;
