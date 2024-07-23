import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import backgroundImage from '../../images/LoginPage/LoginBack.png';
import LoginLogo from '../../images/LoginPage/loginLogo.png';
import CompanyLogo from '../../images/LoginPage/ConnexIT.png';

function LoginPage() {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
  };

  // const password = watch('password');
  const handleBecomeAPartnerClick = () => {
    navigate('/BecomeAPartner');
  };

  return (

    <div className="container">
      <div className='row toprow'>
        <div className='col'><img src={CompanyLogo} alt="Connex Logo" className='companylogo' /></div>
      </div>

      <div className='row'>
        {/* Column One */}
        <div className='col-8'>
          <div className="logo">
            <img src={LoginLogo} alt="Connex Logo" className='loginLogo' />
          </div>
          <div className='back'>
            <img src={backgroundImage} alt="background" className="background-image" />
          </div>
        </div>

        {/* Column Two */}
        <div className='col-4 rightCol'>
          <form onSubmit={handleSubmit(onSubmit)} className="loginform">
            <h2 className='logintopic'>Log in to your account</h2>
            <div className="mb-3">
              <label htmlFor="username" className='form-label'>Username</label>
              <input
                id="username"
                type="text"
                {...register('id', { required: 'Username is required' })}
                className="form-control"
              />
              {errors.id && <span className="error">{errors.id.message}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className='form-label'>Password</label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  // pattern: {
                  //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  //   message: 'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character'
                  // }
                })}
                className="form-control"
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>
            <div className="button-container">
              <button type="submit" className="btn btn-success logbutton">Log in</button>
              <button type="button" onClick={handleBecomeAPartnerClick} className="btn btn-warning">Become a Partner</button>
            </div>
          </form>

        </div>
      </div>


    </div>
  );
}

export default LoginPage;