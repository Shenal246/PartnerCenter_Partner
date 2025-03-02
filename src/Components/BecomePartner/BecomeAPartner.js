import React, { useState } from 'react';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography, Stepper, Step, StepLabel, CircularProgress, Grid } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './BecomePartner.css';
import BecomeComLogo from '../../images/LoginPage/ConnexIT.png';

const steps = ['Personal Information', 'Company Information', 'Director Information'];

const validationSchema = [
  Yup.object({
    personalName: Yup.string().required('Name is required'),
    personalEmail: Yup.string().email('Invalid email').required('Email is required'),
    designation: Yup.string().required('Designation is required'),
    personalMobile: Yup.string().required('Mobile number is required').matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
    department: Yup.string().required('Department is required'),
  }),
  Yup.object({
    companyName: Yup.string().required('Company name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    websiteLink: Yup.string().url('Invalid URL').required('Website link is required'),
    companyEmail: Yup.string().email('Invalid email').required('Email is required'),
    telephone: Yup.string().required('Telephone number is required').matches(/^\d{10}$/, 'Telephone number must be 10 digits'),
    country: Yup.string().required('Country is required'),
    whatsappBusiness: Yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'WhatsApp number must be 10 digits'),
    brNumber: Yup.string().required('BR number is required'),
    vatNumber: Yup.string().required('VAT number is required'),
    // brFile: Yup.mixed().required('BR certificate is required').nullable(),
    // vatFile: Yup.mixed().required('VAT certificate is required').nullable(),
  }),
  Yup.object({
    directorName: Yup.string().required('Name is required'),
    directorEmail: Yup.string().email('Invalid email').required('Email is required'),
    directorMobile: Yup.string().required('Mobile number is required').matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
    directorWhatsapp: Yup.string().required('WhatsApp number is required').matches(/^\d{10}$/, 'WhatsApp number must be 10 digits'),
    // forn20: Yup.mixed().required('FORN20 is required').nullable()
  }),
];

const FormField = ({ name, label, type = "text" }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} md={6}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
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
        )}
      />
    </Grid>
  );
};

const FileUploadField = ({ handleFileChange, fileName, label, name }) => (
  <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
    <Button
      variant="contained"
      component="label"
      startIcon={<UploadFileIcon />}
      sx={{ mt: 1, mr: 2 }}
    >
      Upload {label}
      <input
        type="file"
        hidden
        onChange={(event) => handleFileChange(event, name)}
      />
    </Button>
    {fileName && <Typography variant="body2" sx={{ mt: 1 }}>{fileName}</Typography>}
  </Grid>
);

const PersonalInformation = () => (
  <Grid container spacing={2}>
    <FormField name="personalName" label="Name" />
    <FormField name="personalEmail" label="Email" />
    <FormField name="designation" label="Designation" />
    <FormField name="personalMobile" label="Mobile Number" />
    <FormField name="department" label="Department" />
  </Grid>
);

const CompanyInformation = ({ handleFileChange, brFileName, vatFileName }) => (
  <Grid container spacing={2}>
    <FormField name="companyName" label="Company Name" />
    <FormField name="address" label="Address" />
    <FormField name="city" label="City" />
    <FormField name="websiteLink" label="Website Link" />
    <FormField name="companyEmail" label="Company Email" />
    <FormField name="telephone" label="Telephone Number" />
    <FormField name="country" label="Country" />
    <FormField name="whatsappBusiness" label="WhatsApp Business Number" />
    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
      <FormField name="brNumber" label="BR Number" />
      <FileUploadField handleFileChange={handleFileChange} fileName={brFileName} label="BR Certificate" name="brFile" />
    </Grid>
    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
      <FormField name="vatNumber" label="VAT Number" />
      <FileUploadField handleFileChange={handleFileChange} fileName={vatFileName} label="VAT Certificate" name="vatFile" />
    </Grid>
  </Grid>
);

const DirectorInformation = ({ handleFileChange, forn20FileName }) => (
  <Grid container spacing={2}>
    <FormField name="directorName" label="Director Name" />
    <FormField name="directorEmail" label="Director Email" />
    <FormField name="directorMobile" label="Director Mobile Number" />
    <FormField name="directorWhatsapp" label="Director WhatsApp Number" />
    <Grid item xs={12}>
      <Typography variant="body2" sx={{ mt: 1, mb: 1, color: 'red' }}>
        If "FORM 20" is not submitted, validation may take 2 working days.
      </Typography>
      <FileUploadField handleFileChange={handleFileChange} fileName={forn20FileName} label="FORM 20" name="forn20" />
    </Grid>
  </Grid>
);


const BecomeAPartner = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [brCertificate, setBrCertificate] = useState(null);
  const [vatCertificate, setVatCertificate] = useState(null);
  const [brFileName, setBrFileName] = useState('');
  const [vatFileName, setVatFileName] = useState('');
  const [forn20File, setForn20File] = useState(null);
  const [forn20FileName, setForn20FileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm({
    resolver: yupResolver(validationSchema[activeStep]),
    mode: 'onBlur',
    defaultValues: {
      personalName: '',
      personalEmail: '',
      designation: '',
      personalMobile: '',
      department: '',
      companyName: '',
      address: '',
      city: '',
      websiteLink: '',
      companyEmail: '',
      telephone: '',
      country: '',
      whatsappBusiness: '',
      brNumber: '',
      vatNumber: '',
      directorName: '',
      directorEmail: '',
      directorMobile: '',
      directorWhatsapp: ''
    }
  });

  const { trigger, handleSubmit, setError } = methods;

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (type === 'brFile') {
      setBrCertificate(file);
      setBrFileName(file ? file.name : '');
    } else if (type === 'vatFile') {
      setVatCertificate(file);
      setVatFileName(file ? file.name : '');
    } else if (type === 'forn20') {
      setForn20File(file);
      setForn20FileName(file ? file.name : '');
    }
  };

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) {
      if (activeStep === 1 && (!brCertificate || !vatCertificate)) {
        if (!brCertificate) setError('brFile', { type: 'manual', message: 'BR certificate is required' });
        if (!vatCertificate) setError('vatFile', { type: 'manual', message: 'VAT certificate is required' });
        return;
      }

      if (activeStep === steps.length - 1) {
        setIsSubmitting(true);
        // Submit logic here
        console.log({ brCertificate, vatCertificate, forn20File });
        // Simulate submission delay
        setTimeout(() => {
          setIsSubmitting(false);
          // Add any additional logic needed after submission
        }, 2000);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInformation />;
      case 1:
        return <CompanyInformation handleFileChange={handleFileChange} brFileName={brFileName} vatFileName={vatFileName} />;
      case 2:
        return <DirectorInformation handleFileChange={handleFileChange} forn20FileName={forn20FileName} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <img src={BecomeComLogo} alt='comLogo' className='BecomePageLogo' />

        <Box sx={{ width: '100%', marginTop: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Become a Partner
          </Typography>
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
                <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">Back</Button>
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
        </Box>
      </Container>
    </>
  );
};

export default BecomeAPartner;
