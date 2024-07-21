import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/image/logo.svg';
import cartimg from '../Assets/image/cart-toggle-img-1.png'
import $ from "jquery";
import { click } from '@testing-library/user-event/dist/click';


const Header = () => {
    return (
        <>

            <MenuScript />

            <div className='mainHeader'>
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center position-relative">
                        <div className="col-lg-5 navigation d-none d-lg-block">
                            <nav>
                                <ul className="mainMenu d-flex ps-0 mb-0">
                                    <li><Link to="/">
                                        <div className="iconSet">
                                            <span>Home</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/">Pizza Palace</Link></li>
                                            <li><Link to="/CoffeeHome">Coffee House</Link></li>
                                            <li><Link to="/Home">Gourmet Gateway</Link></li>
                                            <li><Link to="/Home2">Flavor Fiesta</Link></li>
                                            <li><Link to="/Home3">Epicurean Explorer</Link></li>
                                            <li><Link to="/Home3">Epicurean Explorer Dark</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">
                                        <div className="iconSet">
                                            <span>Shop</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/ShopHome">Shop</Link></li>
                                            <li><Link to="/ShopDetails">Shop Details</Link></li>
                                            <li><Link to="/ShopDetailsCoffee">Shop Details Coffee</Link></li>
                                            <li><Link to="/ShopCart">Cart</Link></li>
                                            <li><Link to="/ShopCheckout">Checkout</Link></li>
                                        </ul>
                                    </li>

                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Blog</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/BlogGridOne">Blog Grid One</Link></li>
                                            <li><Link to="/BlogGridTwo">Blog Grid Two</Link></li>
                                            <li><Link to="/BlogStandard">Blog Standard</Link></li>
                                            <li><Link to="/BlogDetails">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Pages</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/PagesAbout">About</Link></li>
                                            <li><Link to="/PageChefs">Chefs</Link></li>
                                            <li><Link to="/PageFaq">FAQ</Link></li>
                                            <li><Link to="/PageReservation">Reservation</Link></li>
                                            <li><Link to="#">Food Menu
                                                <i class="fa-solid fa-angle-right"></i>
                                            </Link>
                                                <ul className="petaMenu">
                                                    <li><Link to="/FoodMenu1">Food Menu 01</Link></li>
                                                    <li><Link to="/FoodMenu2">Food Menu 02</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Contact</span>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/Contactone">Contact one</Link></li>
                                            <li><Link to="/ContactTwo">Contact Two</Link></li>

                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-2 col-md-12">
                            <div className="logobar text-center ">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 position-relative">
                            <div className="menuBar">
                                <div className="menuMeta d-flex justify-content-between me-5">
                                    <div className="searchBar">
                                        <span><i class="fa-solid fa-magnifying-glass"></i></span>
                                        {/* <div className="search">
                                <input type="text" placeholder='search' />
                                <span className='srch'><i class="fa-solid fa-magnifying-glass"></i></span>
                            </div> */}
                                    </div>
                                    <div className="heart">
                                        <span>1</span>
                                        <i class="fa-regular fa-heart"></i>
                                    </div>
                                    <div className="cart cartToggle">
                                        <span>5</span>
                                        <i class="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                                <div className="sign">
                                    <span className='fs-4'><i class="fa-solid fa-circle-user"></i></span>
                                    <span>sign in</span>
                                </div>
                                <div className="toggle d-lg-none d-block">
                                    <i class="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>
                        <div className="mobNavigation">
                            <nav>
                                <ul className="mainMenu ps-0">
                                    <li><Link to="/">
                                        <div className="iconSet">
                                            <span>Home</span>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/">Pizza Palace</Link></li>
                                            <li><Link to="/CoffeeHome">Coffee House</Link></li>
                                            <li><Link to="/Home">Gourmet Gateway</Link></li>
                                            <li><Link to="/Home2">Flavor Fiesta</Link></li>
                                            <li><Link to="/Home3">Epicurean Explorer</Link></li>
                                            <li><Link to="/Home3">Epicurean Explorer Dark</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">
                                        <div className="iconSet">
                                            <span>Shop</span>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/ShopHome">Shop</Link></li>
                                            <li><Link to="/ShopDetails">Shop Details</Link></li>
                                            <li><Link to="/ShopDetailsCoffee">Shop Details Coffee</Link></li>
                                            <li><Link to="/ShopCart">Cart</Link></li>
                                            <li><Link to="/ShopCheckout">Checkout</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Blog</span>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/BlogGridOne">Blog Grid One</Link></li>
                                            <li><Link to="/BlogGridTwo">Blog Grid Two</Link></li>
                                            <li><Link to="/BlogStandard">Blog Standard</Link></li>
                                            <li><Link to="/BlogDetails">Blog Details</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Pages</span>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/PagesAbout">About</Link></li>
                                            <li><Link to="/PageChefs">Chefs</Link></li>
                                            <li><Link to="/PageFaq">FAQ</Link></li>
                                            <li><Link to="/PageReservation">Reservation</Link></li>
                                            <li><Link to="#"><div className="iconSet"> Food Menu
                                                <i class="fa-solid fa-plus"></i>
                                            </div>
                                            </Link>
                                                <ul className="petaMenu">
                                                    <li><Link to="/FoodMenu1">Food Menu 01</Link></li>
                                                    <li><Link to="/FoodMenu2">Food Menu 02</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="#">
                                        <div className="iconSet">
                                            <span>Contact</span>
                                            <i class="fa-solid fa-plus"></i>
                                        </div>
                                    </Link>
                                        <ul className="subMenu">
                                            <li><Link to="/Contactone">Contact one</Link></li>
                                            <li><Link to="/ContactTwo">Contact Two</Link></li>

                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="sign2 text-white text-center pt-5">
                                <span className='fs-4 pe-2'><i class="fa-solid fa-circle-user"></i></span>
                                <span>sign in</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* ===============carttoggle================== */}
            <div className="menuToggleBtn hideSideBar">
                <div className="menuToggleWrap">
                    <div className="cartWrap d-flex justify-content-between">
                        <h2 className='title fs-4'>
                        Your Cart (01)
                        </h2>
                        <div className="closeIcon fs-4">
                        <i class="fa-regular fa-circle-xmark"></i>
                        </div>
                    </div>
                    <div className="menuToggleBody d-flex flex-column h-100 justify-content-between">
                        <div className="cartCountBoxWrap">
                            <div className="cartCountBox d-flex flex-column flex-md-row align-items-sm-start align-items-md-center">
                                <div className="countImg">
                                    <img src={cartimg} alt="" />
                                    </div>
                                    <div className="cartCountInfo">
                                        <h2 className='title fs-4'>Coconut Milk Machismo</h2>
                                        <div className="numberInput pe-2 mt-3 mb-3">
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        <h6 style={{color:"#270A05"}}>100rp</h6>
                                        <span><i class="fa-solid fa-plus"></i></span>
                                    </div>
                                    <p>1 x $10.00</p>
                                    </div>
                                
                            </div>
                            <div className="cartCountBox d-flex flex-column flex-md-row align-items-sm-start align-items-md-center">
                                <div className="countImg">
                                    <img src={cartimg} alt="" />
                                    </div>
                                    <div className="cartCountInfo">
                                        <h2 className='title fs-4'>Coconut Milk Machismo</h2>
                                        <div className="numberInput pe-2 mt-3 mb-3">
                                        <span><i class="fa-solid fa-minus"></i></span>
                                        <h6 style={{color:"#270A05"}}>100rp</h6>
                                        <span><i class="fa-solid fa-plus"></i></span>
                                    </div>
                                    <p>1 x $10.00</p>
                                    </div>                               
                            </div>
                        </div>
                        <div className="cartTotal boderTop pt-3">
                            <p>Subtotal:
                            <span>$10.00</span>
                            </p>
                            <div className="twoBtns">
                                    <div className='commonBtn styleborder mt-3 mb-3'>
                                    <button className='w-100'>View Cart</button>
                                    </div>
                                    <div className='commonBtn mb-5'>
                                    <button className='w-100'>Checkout</button>
                                    </div>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}

export default Header;

export const MenuScript = () => {

    useEffect(() => {
        $(".mobNavigation").hide()
        $(".mobNavigation .subMenu").hide()
        $(".mobNavigation .petaMenu").hide()
       


        const handleToggleMenu = () => {
            $(".mobNavigation").slideToggle();
        }
        $(".toggle").on("click", handleToggleMenu)


        const handleSubMenu = (e) => {
            const target = e.currentTarget
            $(".subMenu").not($(target).next()).slideUp()
            $(target).next().slideToggle()

        }
        $(".mobNavigation .mainMenu li a").on("click", handleSubMenu)


        const handlepetaMenu = (e) => {
            const target = e.currentTarget
            $(".petaMenu").not($(target).next()).slideUp()
            $(target).next().slideToggle()

        }
        $(".mobNavigation .subMenu li a").on("click", handlepetaMenu)


        // ===================addcart=================
        $(".menuToggleBtn").hide()

         const  cartToggleMenu = () =>{
            $(".menuToggleBtn").show()
            $(".menuToggleBtn").toggleClass("hideSideBar showSideBar")
            
         }
         $(".cartToggle").on("click", cartToggleMenu)


         const closeToggleMenu =()=>{
            $(".menuToggleBtn").removeClass("showSideBar")
            $(".menuToggleBtn").addClass("hideSideBar")
            
         }
         $(".closeIcon").on("click",closeToggleMenu)
        

        return () => {
            $(".toggle").off("click", handleToggleMenu)
            $(".mobNavigation .mainMenu li a").off("click", handleSubMenu)
            $(".mobNavigation .subMenu li a").off("click", handlepetaMenu)
            $(".cartToggle").off("click", cartToggleMenu)
            $(".closeIcon").off("click",closeToggleMenu)
        }



    }, []);
    return null;
}


