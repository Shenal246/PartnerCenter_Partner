import React, { useState } from 'react';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Box, TextField, Button, Typography, Stepper, Step, StepLabel, CircularProgress, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as Yup from 'yup';
import axios from 'axios';
import VerticalNavbar from '../NavBar/NavBar';
import './DealRegistration.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Swal from 'sweetalert2'; // Import SweetAlert2
import DealRegImage from '../../images/DealRegistration/deal.jpg';

const steps = ['Opportunity', 'Product Section', 'Remarks'];

const validationSchema = [
  Yup.object({
    projectName: Yup.string().required('Project Name is required'),
    companyName: Yup.string().required('Company Name is required'),
    contactNumber: Yup.string().required('Contact Number is required').matches(/^\d{10}$/, 'Contact Number must be 10 digits'),
    designation: Yup.string().required('Designation is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  }),
  Yup.object({
    selectProducts: Yup.string().required('Select Products is required'),
    closeTimeline: Yup.string().required('Close Timeline is required'),
    budget: Yup.string().required('Budget is required'),
    type: Yup.string().required('Type is required'),
  }),
  Yup.object({
    specialRequest: Yup.string(),
  }),
];

const FormField = ({ name, label, type = 'text', options = [], currencySelector = false }) => {
  const { control } = useFormContext();
  const [currency, setCurrency] = useState('LKR');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Grid item xs={12} md={6} container spacing={1}>
      {currencySelector && (
        <Grid item xs={4}>
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel>Currency</InputLabel>
            <Select value={currency} onChange={handleCurrencyChange} label="Currency">
              <MenuItem value="LKR">LKR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      )}
      <Grid item xs={currencySelector ? 8 : 12}>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            type === 'select' ? (
              <TextField
                select
                {...field}
                label={label}
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ height: 45 }}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            ) : (
              <TextField
                {...field}
                label={label}
                type={type}
                variant="outlined"
                fullWidth
                margin="dense"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
                sx={{ height: 45 }}
              />
            )
          )}
        />
      </Grid>
    </Grid>
  );
};

const Opportunity = () => (
  <Grid container spacing={2}>
    <FormField name="projectName" label="Project Name" />
    <FormField name="companyName" label="Company Name" />
    <FormField name="contactNumber" label="Contact Number" />
    <FormField name="designation" label="Designation" />
    <FormField name="email" label="Email" />
  </Grid>
);

const ProductSection = () => {
  const productOptions = [
    { value: 'product1', label: 'Product 1' },
    { value: 'product2', label: 'Product 2' },
    // Add more products as needed
  ];

  const typeOptions = [
    { value: 'type1', label: 'New Business' },
    { value: 'type2', label: 'Renewal' },
    // Add more types as needed
  ];

  return (
    <Grid container spacing={2}>
      <FormField name="selectProducts" label="Select Products" type="select" options={productOptions} />
      <FormField name="closeTimeline" label="Close Timeline" />
      <FormField name="budget" label="Budget" currencySelector />
      <FormField name="type" label="Type" type="select" options={typeOptions} />
    </Grid>
  );
};

const Remarks = () => (
  <Grid container spacing={2}>
    <FormField name="specialRequest" label="Special Request" />
  </Grid>
);

function DealRegistration() {
  const percentage = 75; // Example percentage
  const percentage123 = 45; // Example percentage

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [activeStep, setActiveStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    resolver: yupResolver(validationSchema[activeStep]),
    mode: 'onBlur',
    defaultValues: {
      projectName: '',
      companyName: '',
      contactNumber: '',
      designation: '',
      email: '',
      selectProducts: '',
      closeTimeline: '',
      budget: '',
      type: '',
      specialRequest: '',
    },
  });

  const { trigger, handleSubmit, setError } = methods;

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) {
      if (activeStep === steps.length - 1) {
        setIsSubmitting(true);
        // Submit logic here
        methods.handleSubmit(onSubmit)();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/deal-registration', data);
      Swal.fire({
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500,
      });
      setIsSubmitting(false);
      handleCloseModal(); // Close the modal on successful submission
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error submitting form',
        showConfirmButton: false,
        timer: 1500,
      });
      setIsSubmitting(false);
    }
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <Opportunity />;
      case 1:
        return <ProductSection />;
      case 2:
        return <Remarks />;
      default:
        return null;
    }
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
                <h4 className="modal-title">Deal Registration</h4>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                <Container>

                  <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                  <FormProvider {...methods}>
                    <Box sx={{ p: 3 }}>
                      {renderStepContent(activeStep)}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                        <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
                          Back
                        </Button>
                        <Button onClick={handleNext} variant="contained" color="primary">
                          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                        </Button>
                      </Box>
                      {isSubmitting && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                          <CircularProgress />
                        </Box>
                      )}
                    </Box>
                  </FormProvider>
                </Container>
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <Button onClick={handleCloseModal} variant="outlined">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealRegistration;
