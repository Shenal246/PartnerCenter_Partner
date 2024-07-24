import './Promotions.css';
import React from 'react'
import Imagesd from '../../images/Promotions/123.jpg';
import topimg from '../../images/Promotions/swit1.jpg';
import Slider from "react-slick";
import VerticalNavbar from '../NavBar/NavBar';

function Promotions() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        cssEase: "linear"
    };
    return (
        <div>
            <VerticalNavbar activeLinkId="promotions" />
            <div className='container'>
                {/* Top Row */}
                <div className='row'>
                    <h1 className='promotionHeading mt-5'>Promotions</h1>
                </div>

                {/* First Row */}
                <div className='row mt-4'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <div className="input-group flex-nowrap">
                            <span className="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
                            <input type="text" class="form-control" placeholder="Search Promotions" aria-label="Search Promotions" aria-describedby="addon-wrapping" />
                        </div>
                    </div>
                    <div className='col-3'></div>
                </div>

                {/* Second Row */}
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

                {/* Third Row */}
                <div className='row mt-5'>
                    <h3>Top Selling Items</h3>
                    <div className="slider-container mt-5">
                        <Slider {...settings}>
                            <div className=''>
                                <div className='topSellingCards'>
                                    <div className='row'>
                                        <img src={topimg} className="topSellingImage" alt="..." />
                                    </div>
                                    <div className='row'>
                                        <h6 className='topSellingTitle'>Trendnet</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='topSellingCards'>
                                    <div className='row'>
                                        <img src={topimg} className="topSellingImage" alt="..." />
                                    </div>
                                    <div className='row'>
                                        <h6 className='topSellingTitle'>Trendnet</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='topSellingCards'>
                                    <div className='row'>
                                        <img src={topimg} className="topSellingImage" alt="..." />
                                    </div>
                                    <div className='row'>
                                        <h6 className='topSellingTitle'>Trendnet</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='topSellingCards'>
                                    <div className='row'>
                                        <img src={topimg} className="topSellingImage" alt="..." />
                                    </div>
                                    <div className='row'>
                                        <h6 className='topSellingTitle'>Trendnet</h6>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotions;