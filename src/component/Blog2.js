import React from 'react'
import { Link } from 'react-router-dom';
import blog1 from '../Assets/image/blog-two-1.png'
import blog2 from '../Assets/image/blog-two-2.png'
import blog3 from '../Assets/image/blog-two-3.png'
import { blogArea2 } from './Users';

const Blog2 = (Props) => {
    const {image,metaDate,name,food,icon,info} =Props;
  return (
    <>
      <div className="blog2Area">
        <div className="container">
        <div className="row">
                <div className="col-lg-12">
                    <div className="subTitle text-center">
                        <p className='name'>Latest Blog</p>
                        <h2 className='title'>Our Latest News & Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row pt-5">
            {
                blogArea2?.map((item)=>{
                    return(
                        <div className="col-lg-4 col-md-6">
                    <div className="blog">
                        <div className="BlogImg position-relative overflow-hidden">
                            <img src={item.image} alt="" />
                            <Link to='#' className='metaDate'>
                               {item.metaDate}
                            </Link>
                        
                        <div className="blogInfo d-flex justify-content-between align-items-center">
                            <ul className='custom d-flex'>
                                <li>{item.name}</li>
                                <li>{item.food}</li>
                            </ul>
                            <div className='mb-3'>
                                {item.icon}
                            </div>
                        </div>
                        </div>
                        <div className='mt-3'>
                        <h3>{item.info}</h3>
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

export default Blog2
