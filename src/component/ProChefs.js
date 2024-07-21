import React from 'react'
import { Link } from 'react-router-dom'
import chef1 from '../Assets/image/chef-two-1.png';
import chef2 from '../Assets/image/chef-two-2.png';
import chef3 from '../Assets/image/chef-two-3.png';
import { masterChefs } from './Users';

const ProChefs = (Props) => {
    const {image,chefName,chefPost,info,facebook,linkdin,instagram}=Props;
  return (
    <>
       <div className="proChefsArea">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subTitle text-center">
                        <p className='name'>Master Chefs</p>
                        <h2 className='title'>Our Professional Chefs</h2>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                {
                    masterChefs?.map((item)=>{
                        return(
                            <div className="col-lg-4 col-sm-6">
                    <div className="chefsBox">
                        <img src={item.image} alt="" />
                        <div className="chefsHoverInfo text-center">
                            <h2 className='chefName'>{item.chefName}</h2>
                            <p>{item.chefPost}</p>
                            <p className='text-white'>{item.info}</p>
                            <ul className="chefsSocial">
                                <li><Link to='#'>{item.facebook}</Link> 
                                </li>
                                <li><Link to='#'>{item.linkdin}</Link>
                                </li>                                    
                                <li><Link to='#'>{item.instagram}</Link>
                                </li>
                            </ul>
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
    </>
  )
}

export default ProChefs
