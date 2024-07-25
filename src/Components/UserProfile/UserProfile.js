// UserProfile.js
import React, { useState } from 'react';
import './UserProfile.css';
import UserIcon from '../../images/User-Icon.jpg';

const UserProfile = () => {
    const [firstName, setFirstName] = useState('Alexander');
    const [lastName, setLastName] = useState('Neil');
    const [email, setEmail] = useState('alexander.neil@example.com'); // non-editable email
    const [company, setCompany] = useState('Tech Corp');
    const [dateRegistered, setDateRegistered] = useState('2024-01-01');
    const [designation, setDesignation] = useState('Software Engineer');
    const [profilePic, setProfilePic] = useState(null);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfilePic(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="user-profile">
                        <h1>Profile settings</h1>
                        <div className="row Profile-section">
                            <div className="Profile-pic">
                                {profilePic ? (
                                    <img src={profilePic} alt="Profile" className="Profile-avatar" />
                                ) : (
                                    <img src={UserIcon} alt="Default Profile" className="Profile-avatar" />
                                )}
                                <div className="Profile-upload-buttons">
                                    <input
                                        type="file"
                                        id="Profile-upload"
                                        style={{ display: 'none' }}
                                        onChange={handleUpload}
                                    />
                                    <label htmlFor="Profile-upload" className="Profile-upload-button Profile-btn">Upload a photo</label>
                                </div>
                            </div>
                        </div>
                        <div className="row Profile-section1">
                            <h2>Additional information</h2>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-first-name">First name</label>
                                <input
                                    type="text"
                                    id="Profile-first-name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-last-name">Last name</label>
                                <input
                                    type="text"
                                    id="Profile-last-name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-email">Email</label>
                                <input
                                    type="email"
                                    id="Profile-email"
                                    value={email}
                                    readOnly
                                    className="form-control"
                                />
                            </div>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-company">Company</label>
                                <input
                                    type="text"
                                    id="Profile-company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-date-registered">Date Registered</label>
                                <input
                                    type="date"
                                    id="Profile-date-registered"
                                    value={dateRegistered}
                                    readOnly
                                    onChange={(e) => setDateRegistered(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="Profile-form-group col-md-6">
                                <label htmlFor="Profile-designation">Designation</label>
                                <input
                                    type="text"
                                    id="Profile-designation"
                                    value={designation}
                                    onChange={(e) => setDesignation(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
