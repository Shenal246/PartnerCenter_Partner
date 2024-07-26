import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import VerticalNavbar from '../NavBar/NavBar';
import './DealRegistration.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from 'sweetalert2'; // Import SweetAlert2
import DealRegImage from '../../images/DealRegistration/deal.jpg';

const schema = yup.object().shape({
  projectName: yup.string().required("Project Name is required"),
  companyName: yup.string().required("Company Name is required"),
  contactNumber: yup.string().required("Contact Number is required").matches(/^\d{10}$/, "Contact Number must be a 10-digit number"),
  designation: yup.string().required("Designation is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  opportunityProjectName: yup.string().required("Opportunity Project Name is required"),
  selectProducts: yup.string().required("Select Products is required"),
  closeTimeline: yup.string().required("Close Timeline is required"),
  budget: yup.string().required("Budget is required"),
  type: yup.string().required("Type is required")
});

function DealRegistration() {
  const percentage = 75; // Example percentage
  const percentage123 = 45; // Example percentage

  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSelectProduct = (product) => {
    setValue('selectProducts', product, { shouldValidate: true });
  };

  const onSubmit = data => {
    axios.post('/api/deal-registration', data)
      .then(response => {
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        handleCloseModal();
      })
      .catch(error => {
        Swal.fire({
          // position: "top-end",
          icon: "error",
          title: "Error submitting form",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

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
              <img src={DealRegImage} alt='Deal Registration Image' className='DealRegImage' />
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
                    <h5><span className='BlueText'>Accept</span>/<span className='RedText'>Pending</span></h5>
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
                    <h5><span className='BlueText'>Win</span>/<span className='RedText'>Lost</span></h5>
                  </div>
                </div>

              </div>
              <div className='row dealbuttonRow'>
                <button className='btn btn-info mt-3 putDealButton' onClick={handleShowModal}>Register a Deal</button>
              </div>
            </div>
          </div>

        </div>

        <div className='row mt-5'>
          <div className='dealTableCard'>
            <h4 className='mt-2'>Deals Summery</h4>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Project Name</th>
                  <th scope="col">Company Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Aging</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Deal Status</th>
                  <th scope="col">Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Sample Project name</td>
                  <td>ABC PVT(LTD)</td>
                  <td><span className='statusAproved'>Approved</span></td>
                  <td>2 yrs</td>
                  <td>Rs 250,000</td>
                  <td><span className='statusAproved'>Approved</span></td>
                  <td>Samantha Perera</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Sample Project name</td>
                  <td>Apple Asia PVT(LTD)</td>
                  <td><span className='statusRegected'>Rejected</span></td>
                  <td>2 yrs</td>
                  <td>Rs 250,000</td>
                  <td><span className='statusPending'>Pending</span></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal */}
        <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">

              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Request Form</h4>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="projectName "><h6>Project Name</h6></label>
                      <input type="text" className="form-control" id="projectName" {...register('projectName')} placeholder="Project Name" />
                      {errors.projectName && <div className="text-danger">{errors.projectName.message}</div>}
                    </div>
                  </div>

                  <h6 className='rowTopic'>Customer Details</h6>

                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="companyName">Company Name</label>
                      <input type="text" className="form-control" id="companyName" {...register('companyName')} placeholder="Company Name" />
                      {errors.companyName && <div className="text-danger">{errors.companyName.message}</div>}
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="contactNumber">Contact Number</label>
                      <input type="text" className="form-control" id="contactNumber" {...register('contactNumber')} placeholder="Contact Number" />
                      {errors.contactNumber && <div className="text-danger">{errors.contactNumber.message}</div>}
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="designation">Designation</label>
                      <input type="text" className="form-control" id="designation" {...register('designation')} placeholder="Designation" />
                      {errors.designation && <div className="text-danger">{errors.designation.message}</div>}
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" {...register('email')} placeholder="Email" />
                      {errors.email && <div className="text-danger">{errors.email.message}</div>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="specialRequest">Special Request</label>
                      <textarea className="form-control" id="specialRequest" {...register('specialRequest')} rows="4"></textarea>
                    </div>
                  </div>

                  <h6 className='rowTopic'>Opportunity</h6>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="opportunityProjectName"> Project Name</label>
                      <input type="text" className="form-control" id="opportunityProjectName" {...register('opportunityProjectName')} placeholder=" Project Name" />
                      {errors.opportunityProjectName && <div className="text-danger">{errors.opportunityProjectName.message}</div>}
                    </div>
                    <div className="form-group col-6 ">
                      <select className="form-select form-select-sm DealProDropDown" aria-label="Large select example" {...register('selectProducts')}>
                        <option value="">Select Products</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      {errors.selectProducts && <div className="text-danger">{errors.selectProducts.message}</div>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="closeTimeline">Close Timeline</label>
                      <input type="text" className="form-control" id="closeTimeline" {...register('closeTimeline')} placeholder="Close Timeline" />
                      {errors.closeTimeline && <div className="text-danger">{errors.closeTimeline.message}</div>}
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="budget">Budget</label>
                      <input type="text" className="form-control" id="budget" {...register('budget')} placeholder="Budget" />
                      {errors.budget && <div className="text-danger">{errors.budget.message}</div>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="type">Type</label>
                      <select id="type" className="form-control" {...register('type')}>
                        <option value="">Choose...</option>
                        <option value="Type1">New Bussines </option>
                        <option value="Type2">Renival </option>
                        {/* Add more options as needed */}
                      </select>
                      {errors.type && <div className="text-danger">{errors.type.message}</div>}
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default DealRegistration;
