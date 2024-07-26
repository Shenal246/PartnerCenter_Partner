import React, { useState, useEffect, useRef } from 'react';
import './VideosPage.css';
import VerticalNavbar from '../NavBar/NavBar';
import { Modal, Button } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

function VideosPage() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeVideo, setActiveVideo] = useState(null);
    const mainSwiperRef = useRef(null);

    const videos = [
        { id: 'video1', url: 'https://www.youtube.com/embed/waCkrUIlSTo' },
        { id: 'video2', url: 'https://www.youtube.com/embed/your-video-id2' },
        { id: 'video3', url: 'https://www.youtube.com/embed/your-video-id3' },
        { id: 'video4', url: 'https://www.youtube.com/embed/your-video-id3' },
        { id: 'video5', url: 'https://www.youtube.com/embed/your-video-id3' },
        { id: 'video6', url: 'https://www.youtube.com/embed/your-video-id3' },
        // Add more video objects as needed
    ];

    useEffect(() => {
        if (activeVideo !== null) {
            const iframe = document.querySelector(`#${activeVideo}`);
            if (iframe) {
                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            }
        }
    }, [activeVideo]);

    const handleMainSlideClick = (videoId) => {
        setActiveVideo(videoId);
        const iframe = document.querySelector(`#${videoId}`);
        if (iframe) {
            iframe.src = `${iframe.src}&autoplay=1&mute=0`;
        }
    };

    const handleSlideChange = () => {
        setActiveVideo(null);
    };

    return (
        <>
            <VerticalNavbar activeLinkId="video" />
            <div className="container">
                <div className='row videoFirstRow'>
                    <h1 className='videosPageHeading'>Videos</h1>
                </div>

                {/* <div className='videoswipercontainer'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={5}
                        navigation={true}
                        // autoplay={{ delay: 5000, disableOnInteraction: false }}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                        className="mySwiper2"
                        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                        onSlideChange={handleSlideChange}
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <div
                                    onClick={() => handleMainSlideClick(video.id)}
                                    style={{ cursor: 'pointer', width: '100%', height: '100%' }}
                                >
                                    <iframe
                                        id={video.id}
                                        width="100%"
                                        height="100%"
                                        src={`${video.url}?enablejsapi=1&mute=1`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title={video.id}
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                        onSlideChange={(swiper) => {
                            const currentIndex = swiper.activeIndex % videos.length;
                            mainSwiperRef.current.slideToLoop(currentIndex);
                        }}
                    >
                        {videos.map((video) => (
                            <SwiperSlide key={video.id}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`${video.url}?enablejsapi=1&mute=1`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.id}
                                ></iframe>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div> */}

                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-11'>
                        <div className='row Roww'>
                            <div className="card vCards" style={{ width: '60vh' }}>
                                <div className="card-img-top custom-card-img" style={{ height: '30vh', cursor: 'pointer' }}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={'https://www.youtube.com/embed/waCkrUIlSTo?si=mKCyZR4NfEOzZNS6'}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="YouTube video"
                                    ></iframe>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideosPage;
