import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import VerticalNavbar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DealRegistration.css';

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
        alert("Form submitted successfully");
        handleCloseModal();
      })
      .catch(error => {
        alert("Error submitting form");
      });
  };

  return (
    <>
      <VerticalNavbar activeLinkId="dealregistration" />

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
              {/* Add any other content here */}
            </div>

          </div>
        </div>
      </div>

      <div className='row'>
<div className='col-6'>

</div>

<div className='col-6'>
<div className='DealReqBtn'>
          <button type="button" className="btn btn-secondary" onClick={handleShowModal}>Request</button>
        </div>
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
                    <select class="form-select form-select-sm DealProDropDown" aria-label="Large select example">
                      <option selected>Select Products</option>
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
                      <option value="Type1">Type1</option>
                      <option value="Type2">Type2</option>
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
    </>
  );
}

export default DealRegistration;
