import React from 'react';
import dashboard from '../../images/DahboardWelcome.jpg';
import './Dashboard.css';
import VerticalNavbar from '../NavBar/NavBar';

function Dashboard() {
    return (
        <>

            <div className="dashboard-container d-flex">
                <VerticalNavbar />
                <div className="card imgcrd" style={{ width: '90vh' }}>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <img src={dashboard} className="card-img-top" alt="..." />
                    {/* <div className="card-body">
                        <a href="#" className="btn btn-primary nxtBtn">Next</a>
                    </div> */}
                </div>
            </div>

        </>
        
    );
}

export default Dashboard;
