import React from 'react';
import VerticalNavbar from '../NavBar/NavBar';
import './DealRegistration.css';

function DealRegistration() {
  return (
    <>
      <VerticalNavbar activeLinkId="dealregistration" />

      {/* Top Row */}
      <div className='row'>
        <h1 className='DealHeading mt-5'>Deal Registration</h1>
      </div>

      <div className='row DealRegbackgroundCards'>
        <div className='DealRegWhiteCard'>
          <div className='row'>

            <div className='col-4 DealCard1Data'>
              <div className='card'>
                <div className='card-body text-center'>
                  <h6 className='card-title'>Total Approvals</h6>
                  <h2 className='card-text'>3,298</h2>
                </div>
              </div>
            </div>

            <div className='col-4 DealCard1Data'>
            {/* add the code of the Chart */}
            </div>

            <div className='col-4 DealCard1Data'>
              
            </div>

          </div>
        </div>
      </div>

      {/* First Row */}
      {/* <div className='row mt-4'>
        <div className='col-8'></div>
        <div className='col-3'>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
            <input type="text" class="form-control" placeholder="Search Promotions" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
        </div>
        <div className='col-3'></div>
      </div> */}

    </>
  );
}

export default DealRegistration;
