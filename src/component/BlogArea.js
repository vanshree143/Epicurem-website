import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../Assets/image/blog-1.png';
import blog2 from '../Assets/image/blog-2.png';
import blog3 from '../Assets/image/blog-3.png';
import { blog } from './Users';


const BlogArea = (Props) => {
    const {image,month,metaDate,name,info} =Props;
  return (
    <>
      <div className="blogArea">
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
                    blog?.map((item)=>{
                        return(
                            <div className="col-lg-4 col-md-6">
                    <div className="blog">
                        <div className="BlogImg position-relative overflow-hidden">
                            <img src={item.image} alt="" />
                            <Link to='#' className='metaDate'>
                                {item.month} <p> {item.metaDate}</p>                               
                            </Link>
                        </div>
                        <div className="blogInfo">
                            <p className='name mt-4'>{item.name}</p>
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

export default BlogArea
