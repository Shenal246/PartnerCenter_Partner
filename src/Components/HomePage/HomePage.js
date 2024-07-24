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

                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-10'>
                        <div class="card UserCardBody mb-3" style={{ width: '90vh' }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={crdImg} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">King DUTUGAMUNU</h5>
                                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-8'>
                    <div className='swiperContainer mt-4'>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">

                                <div className="carousel-item active" data-bs-interval="2000">
                                    <div className='singleSlider'>
                                        <img src={Imagesd} className="d-block w-100 sliderImage" alt="..." />
                                        <div className='sliderButtonContainer'>
                                            <button className='btn btn-info'>Check Product</button>
                                            <button className='btn btn-info'>Request</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className='singleSlider'>
                                        <img src={Imagesd} className="d-block w-100 sliderImage" alt="..." />
                                        <div className='sliderButtonContainer'>
                                            <button className='btn btn-info'>Check Product</button>
                                            <button className='btn btn-info'>Request</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item" data-bs-interval="2000">
                                    <div className='singleSlider'>
                                        <img src={Imagesd} class="d-block w-100 sliderImage" alt="..." />
                                        <div className='sliderButtonContainer'>
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
                    <div className='col-2'></div>
                   
                </div>



            </div>
        </>
    );
}

export default HomePage;
