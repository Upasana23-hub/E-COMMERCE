// SignIn.js
import React, { useState } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Please fill in all fields');
    } else {
      // You can implement your sign-in logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // Clear form fields after submission
      setEmail('');
      setPassword('');
      setErrorMessage('');
    }
  };

  return (

    <div className='SignIn-outer'>
        <div className='signin-inner'>
            <h2 className='signin-heading'>Sign In</h2>
            <form onSubmit={handleSignIn}>
            <div className="form-group">
                <label htmlFor="Mobile Number"><b>Email:</b></label>
                <br/>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group1">
                <label htmlFor="password"><b>Password:</b></label>
                <br/>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p className='signinmsg'>By signing in, you agree to Shopee's <Link to="/Terms" className='signin-link'>Conditions of Use</Link> and <Link to="/Privacy" className='signin-link'>Privacy Notice</Link>. </p>
            <div className='form-group1'>
            <button className='signin-btn' type="submit" >Sign In</button>
            </div>
            </form>
            
            <p ><Link className='signin-forgot'>Forgot Password?</Link></p>
            <Link to="/signup" className='signin1' ><p className='signin1'>New to Shopee? Create an account</p></Link>
        </div>
        
    </div>
  );
};

export default SignIn;
