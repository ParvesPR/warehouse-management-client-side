import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='login-section'>
            <div className='mt-5 py-5 login-container col-lg-4 mx-auto '>
                <form className='input-container'>
                    <h2 className='text-center text-white'>Create Account</h2>
                    <input className='form-control mb-3' type="text" name="name" placeholder='Name' />
                    <input className='form-control mb-3' type="text" name="email" placeholder='Email' />
                    <input className='form-control mb-3' type="text" name="password" placeholder='Password' />
                    <input className='form-control mb-3' type="text" name="confirm" placeholder='Confirm Password' />
                    <input className='form-control btn btn-info' type="submit" value="Submit" />
                    <p className='text-white py-2'>Already have an account? <Link className='text-decoration-none' to="/login">Login</Link></p>
                    <div className='d-flex align-items-center text-center'>
                        <p className='w-50 me-2 divider1 mx-auto'></p>
                        <p className='text-white mx-3 mx-auto'>or</p>
                        <p className='w-50 ms-2 divider2 mx-auto'></p>
                    </div>
                    <div className='mx-auto text-center'>
                        <button className='w-100 btn btn-outline-light submit-btn'>Continue with Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;