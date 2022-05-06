import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login-section'>
        <div className='mt-5 py-5 login-container col-lg-4 mx-auto '>
            <form className='input-container'>
            <h2 className='text-center text-white'>Login Here</h2>
            <input className='form-control mb-3' type="text" name="name" placeholder='Name'/>
            <input className='form-control mb-3' type="text" name="email" placeholder='Email' />
            <input className='form-control mb-3' type="text" name="password" placeholder='Password' />
            <input className='form-control btn btn-info' type="submit" value="Submit" />
            </form>
        </div>
        </div>
    )
};

export default Login;