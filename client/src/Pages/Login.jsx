// In Login.js
import React from 'react';
import '../components/login/login.css';
import LoginFormComponent from '../components/login/LoginFormComponent';

const Login = () => {
  return (
    <div className='login'>
        <LoginFormComponent /> 
    </div>
  );
}

export default Login;
