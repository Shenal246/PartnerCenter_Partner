import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BecomePartner.css';

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    mobile: yup.string().required("Mobile is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    brNumber: yup.string().required("BR Number is required"),
    vatNumber: yup.string().required("VAT Number is required"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    department: yup.string().required("Department is required"),
    nic: yup.string().required("NIC is required"),
    designation: yup.string().required("Designation is required"),
    whatsappBusiness: yup.string().required("Whatsapp Business is required"),
    directorName: yup.string().required("Director Name is required"),
    directorId: yup.string().required("Director ID is required"),
    directorEmail: yup.string().email("Invalid email").required("Director Email is required"),
    directorMobile: yup.string().required("Director Mobile is required"),
    brCertificate: yup.mixed().required("BR Certificate is required"),
    vatCertificate: yup.mixed().required("VAT Certificate is required"),
});

const BecomePartner = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });

        axios.post('/api/partner', formData)
            .then(response => {
                alert("Form submitted successfully");
            })
            .catch(error => {
                alert("Error submitting form");
            });
    };

    return (
        <div className="container mt-5">
            <div className='row'>
            <h2 className='topic'>Become a Partner</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    
                </div>
                

                <div className='col'>
                <div className="form-group">
                    <h3>Director Details</h3>
                    <label>Director Name</label>
                    <input type="text" {...register('directorName')} className="form-control" />
                    {errors.directorName && <p className="text-danger">{errors.directorName.message}</p>}
                </div>
                <div className="form-group">
                    <label>Director ID</label>
                    <input type="text" {...register('directorId')} className="form-control" />
                    {errors.directorId && <p className="text-danger">{errors.directorId.message}</p>}
                </div>
                <div className="form-group">
                    <label>Director Email</label>
                    <input type="text" {...register('directorEmail')} className="form-control" />
                    {errors.directorEmail && <p className="text-danger">{errors.directorEmail.message}</p>}
                </div>
                <div className="form-group">
                    <label>Director Mobile</label>
                    <input type="text" {...register('directorMobile')} className="form-control" />
                    {errors.directorMobile && <p className="text-danger">{errors.directorMobile.message}</p>}
                </div>


                </div>




                <div className='row'>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>

                </div>
         
            </form>
        </div>
    );
}

export default BecomePartner;
