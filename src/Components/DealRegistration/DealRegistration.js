import React from 'react';
import VerticalNavbar from '../NavBar/NavBar';
import './DealRegistration.css';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import DealRegImage from '../../images/DealRegistration/deal.jpg';

function DealRegistration() {
  const percentage = 75; // Example percentage
  const percentage123 = 45; // Example percentage

  return (
    <>
      <VerticalNavbar activeLinkId="dealregistration" />

      <div className='container'>
        {/* Top Row */}

        <div className='row'>
          <h1 className='DealHeading mt-5'>Deal Registration</h1>
        </div>

        <div className='DealRegWhiteCard'>
          <div className='row'>

            <div className='col-5 cardFirstCol'>
              <h4>- Deal Registration -</h4>
              <p>Sample text that describes deal registration.</p>
              <img src={DealRegImage} alt='Deal Registration Image' className='DealRegImage'/>
            </div>

            <div className='col-7 cardSecondCol'>
              <div className='row'>

                <div className='card DealCard1Data'>
                  <div className='card-body text-center'>
                    <h6 className='card-title'>Total Approvals</h6>
                    <h2 className='card-text'>3,298</h2>
                  </div>
                </div>

                {/* add the code of the Chart */}
                <div className='dealprogressCard'>
                  <div className='dealprogressCardRow'>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      strokeWidth={7}
                      styles={buildStyles({
                        // Colors
                        pathColor: percentage > 50 ? '#3b82f6' : '#06b6d4', // Dynamic color based on percentage
                        trailColor: '#ff5757',
                        // Path transition
                        pathTransitionDuration: 0.15,
                        // Customize the path
                        // pathTransition: 'none',
                        // Customize the trail
                      })}
                    />
                  </div>
                  <div className='mt-2 dealProgressHeadingRow'>
                    <h5>Accept/Pending</h5>
                  </div>
                </div>

                <div className='dealprogressCard'>
                  <div className='dealprogressCardRow'>
                    <CircularProgressbar
                      value={percentage123}
                      text={`${percentage123}%`}
                      strokeWidth={7}
                      styles={buildStyles({
                        // Colors
                        pathColor: percentage123 > 50 ? '#3b82f6' : '#06b6d4', // Dynamic color based on percentage
                        trailColor: '#ff5757',
                        // Path transition
                        pathTransitionDuration: 0.15,
                        // Customize the path
                        // pathTransition: 'none',
                        // Customize the trail
                      })}
                    />
                  </div>

                  <div className='mt-2 dealProgressHeadingRow'>
                    <h5>Win/Lost</h5>
                  </div>
                </div>

              </div>
              <div className='row dealbuttonRow'>
                <button className='btn btn-info mt-3 putDealButton'>Put a Deal</button>
              </div>
            </div>
          </div>

        </div>

        <div className='row mt-5'>
          <div className='dealTableCard'>
            <h4 className='mt-2'>Deals Summery</h4>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Project Name</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Status (Approved / Pending)</th>
                  <th scope="col">Aging</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Deal Status</th>
                  <th scope="col">Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </>
  );
}

export default DealRegistration;
