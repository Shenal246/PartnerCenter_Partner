import React, { useState } from 'react';
import './VideosPage.css';
import VerticalNavbar from '../NavBar/NavBar';
import { Modal, Button } from 'react-bootstrap';

function VideosPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const youtubeEmbedUrl = "https://www.youtube.com/embed/your-video-id"; // Replace with your YouTube video ID

    return (
        <>
            <VerticalNavbar activeLinkId="video" />
            <div className="container">
            <div className='row'>
                    <h1 className='videosPageHeading'>Videos</h1>
                </div>

                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-11'>
                        <div className='row Roww'>
                            <div className="card vCards" style={{ width: '60vh' }}>
                                <div className="card-img-top custom-card-img" style={{ height: '30vh', cursor: 'pointer' }} onClick={handleShow}>
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
