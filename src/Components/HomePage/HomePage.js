import React from 'react';
import dashboard from '../../images/loginback.png';
import './HomePage.css';
import VerticalNavbar from '../NavBar/NavBar';

function HomePage() {
    return (
        <>
            <div className="dashboard-container d-flex">
                <VerticalNavbar />
                <div className='col-1'></div>
                <div className='col-11'>
                    
                    <div className='row Roww'>
                        <div className="card vCards" style={{ width: '60vh'}}>
                            <img src={dashboard} style={{ height: '30vh'}} className="card-img-top custom-card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>

                        <div className="card vCards" style={{ width: '60vh'}}>
                            <img src={dashboard} style={{ height: '30vh'}} className="card-img-top custom-card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>

                        <div className="card vCards" style={{ width: '60vh'}}>
                            <img src={dashboard} style={{ height: '30vh'}} className="card-img-top custom-card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>

                        <div className="card vCards" style={{ width: '60vh'}}>
                            <img src={dashboard} style={{ height: '30vh'}} className="card-img-top custom-card-img" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    );
}

export default HomePage;
