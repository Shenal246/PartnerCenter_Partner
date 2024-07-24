import React, { useState } from 'react';
import './HomePage.css';
import VerticalNavbar from '../NavBar/NavBar';
import crdImg from '../../images/User-Icon.jpg'
import Imagesd from '../../images/Promotions/123.jpg';


function HomePage() {

    return (
        <>
            <VerticalNavbar activeLinkId="home" />
            <div className="container">

                {/* First row  */}
                <div className='row '>
                    <div className="cards-container rowFirst">
                        <div className="card HomeCard1">
                            <div className="card-content">
                                <h2>Welcome to Connex Partner Portal</h2>
                                <h3>Enhance Your Business with Connex</h3>
                                <p>
                                    Access powerful tools, resources, and support designed to help you succeed.
                                    Join our community of partners today and unlock new opportunities.
                                </p>
                            </div>
                        </div>
                        <div className="card HomeCard1">
                            <div className="card-content profile-card">
                                <div className='col-5'>
                                    <img src={crdImg} alt="Profile" className="profile-img"  />
                                </div>

                        
                                <div class="col-md-7">
                                    <div class="card-body HomeCardBody">
                                        <div className="profile-info">
                                            <p><strong>A.D C Sirisena</strong></p>
                                            <p>Admin - CAX Solutions</p>
                                            <p>ID-xxxxxxx</p>
                                            <button className="profile-button">Profile</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* second row  */}

                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div className='HomeswiperContainer mt-4'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner">

                                    <div className="carousel-item active" data-bs-interval="2000">
                                        <div className='HomesingleSlider'>
                                            <img src={Imagesd} className="d-block w-100 HomesliderImage" alt="..." />
                                            <div className='HomesliderButtonContainer'>
                                                <button className='btn btn-info'>Check Product</button>
                                                <button className='btn btn-info'>Request</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-bs-interval="2000">
                                        <div className='HomesingleSlider'>
                                            <img src={Imagesd} className="d-block w-100 HomesliderImage" alt="..." />
                                            <div className='HomesliderButtonContainer'>
                                                <button className='btn btn-info'>Check Product</button>
                                                <button className='btn btn-info'>Request</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item" data-bs-interval="2000">
                                        <div className='HomesingleSlider'>
                                            <img src={Imagesd} class="d-block w-100 HomesliderImage" alt="..." />
                                            <div className='HomesliderButtonContainer'>
                                                <button className='btn btn-info'>Check Product</button>
                                                <button className='btn btn-info'>Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>


                    </div>
                    <div className='col-1'></div>

                </div>



            </div>
        </>
    );
}

export default HomePage;
