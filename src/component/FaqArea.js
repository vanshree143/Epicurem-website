import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'n
import $ from "jquery";

const FaqArea = () => {
    return (
        <>
            <FaqScript />
            <div className="faqArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p className='name'>Contact Us</p>
                            <h2 className='title'>Have Any Questions?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="faqWrap">
                                <div className="accordionItem">
                                    <h2 className="accordionHeader fs-5">
                                        <button className='accBtn'>
                                            What is the project idea?                                  <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </h2>
                                    <div className="collapseone collapse show">
                                        <div className="accBody">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordionItem">
                                    <h2 className="accordionHeader fs-5">
                                        <button className='accBtn'>
                                            Can a reserve table depreciate in value?
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </h2>
                                    <div className="collapseone collapse show">
                                        <div className="accBody">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordionItem">
                                    <h2 className="accordionHeader fs-5">
                                        <button className='accBtn'>
                                            Is an older order as good a value as a new order food?
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </h2>
                                    <div className="collapseone collapse show">
                                        <div className="accBody">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordionItem">
                                    <h2 className="accordionHeader fs-5">
                                        <button className='accBtn'>
                                            Do you require a deposit to begin design work?
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </h2>
                                    <div className="collapseone collapse show">
                                        <div className="accBody">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordionItem">
                                    <h2 className="accordionHeader fs-5">
                                        <button className='accBtn'>
                                            How we can verify the reservation?
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </h2>
                                    <div className="collapseone collapse show">
                                        <div className="accBody">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sideBarWrap">
                                <div className="sideBarItem">
                                    <h2 className='sectionTitle fs-5 text-center'>Ask Anything</h2>
                                    <form className='contentWrap'>
                                        <div className="row">
                                            <div className="col-lg-12 mt-3">
                                                <label className='d-inline-block'>Name</label>
                                                <input type="text" placeholder='Enter your name' />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <label className='d-inline-block'>Email</label>
                                                <input type="text" placeholder='Enter your email' />
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <label className='d-inline-block'>Write comment</label>
                                                <textarea type="text" placeholder='Type your comment' />
                                            </div>
                                            <div className="col-lg-12 mt-4">
                                                <div className="commonBtn">
                                                    <button className='w-100'>Submitted Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className='title fs-2'>Still need help? Reach out to support 24/7:</h2>
                            <div className="addressBox mt-4 d-flex">
                                <div className="addressIcon mt-2">
                                    <i class="fa-solid fa-phone"></i>
                                </div>
                                <div className="addressInfo ms-4">
                                    <p className='name m-0'>Call Us</p>
                                    <h4>(684) 555-0102</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqArea

export const FaqScript = () => {
    useEffect(() => {
        $(".collapse").hide()

        const handelMenu = (event) => {
            const thiss = event.currentTarget
            $(thiss).next(".collapse").slideToggle("show hide")
        }
        $(".accordionHeader").on("click", handelMenu)

        return () => {
            $(".accordionHeader").off("click", handelMenu)
        }

    }, [])
}
