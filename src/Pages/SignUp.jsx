import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactnumber: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    country: '',
    zip: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('Password does not match');
    // Add validation logic here
    // Submit data to server or handle it as required
    console.log(formData);
  };

  return (
    <div className='signup-outer'>
    <div className="signup-inner">
      <h2 className='signup-heading'>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-group">
          <label htmlFor="firstName">First Name:</label><br/>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="lastName">Last Name:</label><br/>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="email">Email:</label><br/>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="contactnumber">Contact Number:</label><br/>
          <input type="number" id="contactnumber" name="contactnumber" value={formData.contactnumber} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="password">Password:</label><br/>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label><br/>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/>
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
        <div className="signup-form-group">
          <label htmlFor="address">Address:</label><br/>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="city">City:</label><br/>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required/>
        </div>
        <div className="signup-form-group">
          <label htmlFor="country">Country:</label><br/>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
        </div>
        <div className="signup-form-group">
          <label htmlFor="zip">ZIP Code:</label><br/>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleChange} required/>
        </div>
        <br/>
        <p>By creating an account or logging in, you agree to Shopee’s<Link to="/Terms" className='signup-link'>Conditions of Use</Link> and <Link to="/Privacy" className='signup-link'>Privacy Policy</Link>. </p>
        <button type="submit" className='signup-btn'>Sign Up</button>
      </form>
      <Link to="/signin" className='signup1' ><p className='signup1'>Already have an account? Sign in</p></Link>
    </div>
    </div>
  );
}

export default SignUp;
