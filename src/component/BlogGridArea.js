import React from 'react'
import { Link } from 'react-router-dom'
import blog1 from '../Assets/image/blog-1.png';
import blog2 from '../Assets/image/blog-2.png';
import blog3 from '../Assets/image/blog-3.png';
import blog4 from '../Assets/image/blog-4.png';
import blog5 from '../Assets/image/blog-5.png';
import blog6 from '../Assets/image/blog-6.png';
import blog7 from '../Assets/image/blog-7.png';
import blog8 from '../Assets/image/blog-8.png';
import blog9 from '../Assets/image/blog-9.png';
import { blogGridone } from './Users';


const BlogGridArea = (Props) => {
    const {image,month,metaDate,name,info}=Props;
    
    return (
    <>
      <div className="blogGridArea">
        <div className="container">
        <div className="row mt-5">
                    {
                        blogGridone?.map((item)=>{
                            return(
                                <div className="col-lg-4 col-md-6">
                    <div className="blog">
                        <div className="BlogImg position-relative overflow-hidden">
                            <img src={item.image} alt="" />
                            <Link to='#' className='metaDate'>
                               {item.month} <p>{item.metaDate}</p>
                            </Link>
                        </div>
                        
                        <div className="blog2Info">
                            <p className='name mt-2'>{item.name}</p>
                            <h3>{item.info}</h3>
                        </div>
                    </div>
                </div>
                            )
                        })
                    }
            </div>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <ul className="pagination">
                        <li>
                            <Link to='#'><i class="fa-solid fa-angle-left"></i></Link>
                        </li>
                        <li>
                            <Link>1</Link>
                        </li>
                        <li className='active'>
                            <Link>2</Link>
                        </li>
                        <li><Link>3</Link></li>
                        <li> <Link><i class="fa-solid fa-angle-right"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogGridArea
