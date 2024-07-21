import React from 'react';
import post1 from '../Assets/image/sidebar-post-1.png'  
import { Link } from 'react-router-dom';
import post2 from '../Assets/image/sidebar-post-2.png'  
import post3 from '../Assets/image/sidebar-post-3.png'  
import post4 from '../Assets/image/sidebar-post-4.png'  
import sidebar from '../Assets/image/sidebar.png'

const BlogSection = () => {
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
                            <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                            <Link to='https://epicurean.netlify.app/epicurean/blog-details' className='blogBtn'>Continue Reading 
                            <i class="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                        <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post2} alt="" />
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
                            <h2 className='title fs-2'>Savoring Delights: A Culinary Journey of Epicurean</h2>
                            <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                            <Link to='https://epicurean.netlify.app/epicurean/blog-details' className='blogBtn'>Continue Reading 
                            <i class="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                        <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post3} alt="" />
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
                            <h2 className='title fs-2'>Epicurean Escapades: Discovering Foodie Delights</h2>
                            <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                            <Link to='https://epicurean.netlify.app/epicurean/blog-details' className='blogBtn'>Continue Reading 
                            <i class="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                        <div className="blogBox">
                            <div className="BlogBoxImg overflow-hidden">
                                <img src={post4} alt="" />
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
                            <h2 className='title fs-2'>A Taste of Perfection: Best Reviews and Recommendations</h2>
                            <p>There are many variations of passages of Lorem Ipsum form any injected humour, or randomized words which don't look slightly believable.</p>
                            <Link to='https://epicurean.netlify.app/epicurean/blog-details' className='blogBtn'>Continue Reading 
                            <i class="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="row ">
                    <div className="col-lg-12 d-flex text-start">
                    <ul className="pagination ">
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
                                <img src={post2} alt="" />
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

export default BlogSection
