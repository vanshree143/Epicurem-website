import React from 'react'
import { Link } from 'react-router-dom'
import post1 from '../Assets/image/sidebar-post-1.png'  
import post0 from '../Assets/image/sidebar-post-2.png'
import post2 from '../Assets/image/details-1.png'  
import post3 from '../Assets/image/details-3.png'  
import post4 from '../Assets/image/details-2.png'  
import c1 from '../Assets/image/comments-1.png'
import c2 from '../Assets/image/comments-2.png'
import c3 from '../Assets/image/comments-3.png'
import sidebar from '../Assets/image/sidebar.png'

const BlogSection2 = () => {
  return (
    <>
      <div className="blogSection">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blogPostWrap">
                    <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post1} alt="" />
                            </div>
                            <ul className="blogBoxMeta m-0 p-0 
                            mt-3">
                                <li><i class="fa-solid fa-circle-user"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>Harrison Garton</Link>
                                </li>
                                <li><i class="fa-regular fa-calendar"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>15 Sept, 2023</Link>
                                </li>
                                <li><i class="fa-solid fa-eye"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>4.6k</Link>
                                </li>
                            </ul>
                            <h2 className='title fs-2'>Eat Healthy & Tasty Foods, Get The Real Happiness</h2>
                            <p>Indulge in the delight of a healthier lifestyle with our selection of both nutritious and delectable foods. At Epicurean, we believe that the key to genuine happiness lies in the fusion of taste and well-being.</p>
                            <p>Our carefully curated menu ensures a harmonious balance between flavor and nutritional value, offering a culinary experience that not only satisfies your taste buds but also nourishes your body. Elevate your dining experience with our range of thoughtfully crafted dishes, each prepared with the finest ingredients to bring you both joy and vitality. Embrace the journey to a happier, healthier you by savoring the goodness of eating well at Epicurean.</p>
                            
                        </div>
                        <div className="detailsImg">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <img src={post4} alt="" />
                                        </div>
                                        <div className="col-lg-12">
                                            <img src={post3} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src={post2} alt="" className='detailImg1' />
                                </div>
                            </div>
                            <p className='mt-3'>-- Healthy Life, Eat Fresh Food, Lead a Joyful Life</p>
                        </div>
                        <h2 className='title fs-4'>Share cooking techniques, tips, and tricks that can help your readers become better cooks</h2>
                        <p>Our menu is meticulously crafted to provide a harmonious fusion of delicious and nutritious options, ensuring that you not only enjoy your meals but also contribute to your overall well-being. Join us in embracing the philosophy that eating healthy and tasty foods is the key to unlocking real happiness.</p>
                        <ul className="cheakList mt-3 ps-0">
                        <li><i class="fa-regular fa-circle-check"></i>
                            Prioritize whole, unprocessed foods
                        </li>
                        <li><i class="fa-regular fa-circle-check"></i>
                            a wide range of colorful fruits and vegetables
                        </li>
                        <li><i class="fa-regular fa-circle-check"></i>
                            Enjoy treats in moderation
                        </li>                
                        </ul>
                        <blockquote className='blockQuote'>
                            <p>Savor the symphony of flavors that dance on your palate, where the union of healthy and tasty foods orchestrates the melody of true happiness. Because, at the heart of well-being, lies the joyous journey of nourishing your body with goodness</p>
                            <cite>Harrison Garton</cite>
                        </blockquote>
                        <p className='mt-3'>Embark on a culinary journey that combines the joy of delectable flavors with the nourishment of wholesome ingredients. At Epicurean, we believe in the transformation power of eating well, where every bite is a celebration of both health and taste</p>
                        <div className="detailsTag d-flex mt-4">
                            <span className='fw-bold text-black'>Popular Tag:</span>
                            <ul className="sidebarTag d-flex flex-wrap m-0 p-0">
                            <li><Link to='#'>Mains</Link></li>
                            <li><Link to='#'>Drinks</Link></li>
                            <li><Link to='#'>Salad</Link></li>
                            <li><Link to='#'>Desserts</Link></li>                           
                        </ul>
                        </div>
                        <div className="commentSection mt-5">
                            <h2 className='sidebarTitle text-start fw-800 mb-5'>02 Comment’s</h2>
                            <div className="commentsWrap">
                                <div className="singleCommentsBox">
                                    <div className="commentImg">
                                        <img src={c1} alt="" />
                                    </div>
                                    <div className="commentsInfo">
                                        <h3>Christopher Martin -
                                        <span> August 29, 2023</span>
                                        <Link><i class="fa-solid fa-reply"></i>Replay</Link>
                                        </h3>
                                        <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which of don't look slightly believable. Contrary to popular belief, Lorem is not simply random text. It has roots in a piece classical Latin literature from.</p>
                                    </div>
                                </div>
                                <div className="singleCommentsBox">
                                    <div className="commentImg">
                                        <img src={c2} alt="" />
                                    </div>
                                    <div className="commentsInfo">
                                        <h3>Amanda Myer -
                                        <span> August 29, 2023</span>
                                        <Link><i class="fa-solid fa-reply"></i>Replay</Link>
                                        </h3>
                                        <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which of don't look slightly believable. Contrary to popular belief, Lorem is not simply random text. It has roots in a piece classical Latin literature from.</p>
                                    </div>
                                </div>
                                <div className="singleCommentsBox">
                                    <div className="commentImg">
                                        <img src={c3} alt="" />
                                    </div>
                                    <div className="commentsInfo">
                                        <h3>Andrew Marlow -
                                        <span> August 29, 2023</span>
                                        <Link><i class="fa-solid fa-reply"></i>Replay</Link>
                                        </h3>
                                        <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which of don't look slightly believable. Contrary to popular belief, Lorem is not simply random text. It has roots in a piece classical Latin literature from.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="replayForm 
                        mt-5 ">
                            <h2 className='sidebarTitle text-start fw-bold'>Leave A Comment</h2>
                            <form action="contactWrap">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label className='d-inline-block'>Write comment</label>
                                        <textarea cols="30" rows="5" placeholder='Type your comment'></textarea>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Full Name</label>
                                        <input type="text" placeholder='Enter your name'/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Email</label>
                                        <input type="text" placeholder='Enter your email input'/>
                                    </div>
                                    <div className="col-lg-4">
                                        <label>Phone Number</label>
                                        <input type="text" placeholder='Enter your email input'/>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                       <div className="commonBtn">
                                       <button>
                                            Submitted Now
                                        </button>
                                       </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sideBarWrap">
                        <div className="sideBarItem mt-4">
                            <h2 className='sidebarTitle'>Search</h2>
                            <form className='sideBarForm position-relative'>
                                <input type="email" placeholder='Search Here' />
                                <button className='commonBtn'>
                                <i class="fa-solid fa-magnifying-glass"></i> <span>Search</span>
                                </button>
                            </form>
                        </div>
                        <div className="sideBarItem">
                        <h2 className='sidebarTitle'>About Me</h2>
                        <div className="sideBarAbout text-center">
                            <div className="sideBarAboutImg">
                                <img src={sidebar} alt="" />
                            </div>
                            <h2 className='sidebarTitle fw-bold mt-3'>Harrison Garton</h2>
                            <p className='m-0'>I create simple, delicious recipes that require 10 ingredients or less, one bowl, or 30 minutes or less to prepare.</p>
                        </div>
                        </div>
                        <div className="sideBarItem">
                        <h2 className='sidebarTitle'>Recent Post</h2>
                        <div className="recentPostWrap">
                        <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post1} alt="" />
                            </div>
                            <ul className="blogBoxMeta m-0 p-0 
                            mt-3">
                                <li><i class="fa-solid fa-circle-user"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>Harrison Garton</Link>
                                </li>
                                <li><i class="fa-regular fa-calendar"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>15 Sept, 2023</Link>
                                </li>
                                <li><i class="fa-solid fa-eye"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>4.6k</Link>
                                </li>
                            </ul>
                            <h2 className='title fs-5'>Eat Healthy & Tasty Foods, Get The Real Happiness</h2>
                           </div>
                           <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post0} alt="" />
                            </div>
                            <ul className="blogBoxMeta m-0 p-0 
                            mt-3">
                                <li><i class="fa-solid fa-circle-user"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>Harrison Garton</Link>
                                </li>
                                <li><i class="fa-regular fa-calendar"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>15 Sept, 2023</Link>
                                </li>
                                <li><i class="fa-solid fa-eye"></i>
                                    <Link to='https://epicurean.netlify.app/epicurean/blog-details'>4.6k</Link>
                                </li>
                            </ul>
                            <h2 className='title fs-5'>Savoring Delights: A Culinary Journey of Epicurean</h2>
                           
                        </div>
                        </div> 
                        </div>
                        <div className="sideBarItem">
                        <h2 className='sidebarTitle'>Tags</h2>
                        <ul className="sidebarTag d-flex flex-wrap">
                            <li><Link to='#'>Mains</Link></li>
                            <li><Link to='#'>Drinks</Link></li>
                            <li><Link to='#'>Salad</Link></li>
                            <li><Link to='#'>Desserts</Link></li>
                            <li><Link to='#'>Appetizer</Link></li>
                            <li><Link to='#'>Beverage</Link></li>
                            <li><Link to='#'>Sea Food</Link></li>
                            <li><Link to='#'>Fast Food</Link></li>
                            <li><Link to='#'>Salads</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection2
