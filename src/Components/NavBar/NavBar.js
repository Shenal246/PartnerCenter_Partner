import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CompanyLogo from '../../images/LoginPage/ConnexIT.png';
import UserIcon from '../../images/User-Icon.jpg';
import './NavBar.css';

const VerticalNavbar = ({ activeLinkId }) => {
    return (
        <div className="navbar-container">
            <div className="vertical-navbar d-flex flex-column flex-shrink-0 p-3 bg-light">
                <div className='row'>
                    <img src={CompanyLogo} alt="Connex Logo" className='companylogo' />
                </div>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/" id="home" className={`nav-link text-dark ${activeLinkId === 'home' ? 'active' : ''}`}>
                            <i className="bi bi-house-door"></i> <span className="nav-text">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products" id="products" className={`nav-link text-dark ${activeLinkId === 'products' ? 'active' : ''}`}>
                            <i className="bi bi-box-seam"></i> <span className="nav-text">Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Promotions" id="promotions" className={`nav-link text-dark ${activeLinkId === 'promotions' ? 'active' : ''}`}>
                            <i class="bi bi-tags"></i><span className="nav-text">Promotions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dealregistration" id="dealregistration" className={`nav-link text-dark ${activeLinkId === 'dealregistration' ? 'active' : ''}`}>
                            <i class="bi bi-r-square"></i><span className="nav-text">Deal Registration</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Videos" id="video" className={`nav-link text-dark ${activeLinkId === 'video' ? 'active' : ''}`}>
                            <i class="bi bi-camera-video"></i> <span className="nav-text">Video</span>
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={UserIcon} alt="" width="50" height="50" className="rounded-circle me-2" />
                        <strong className='UserProfile'>User</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser1">
                        <li>
                            <Link to="/UserProfile" className="dropdown-item">Profile</Link> 
                        </li>
                        {/* <li><a className="dropdown-item" href="#">Settings</a></li> */}
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default VerticalNavbar;
