import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    

    const [
        createUserWithEmailAndPassword,
        user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate(from, { replace: true });
    };

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log('clicked')
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleConfirm = event => {
        setConfirm(event.target.value);
    };

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirm) {
            setError('Password did not match')
            return;
        };
        if (password.length < 6) {
            setError('Password must be more than 6 characters');
            return;
        };
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='login-section'>
            <div className='mt-5 py-5 login-container col-lg-4 mx-auto '>
                <form onSubmit={handleCreateUser} className='input-container'>
                    <h2 className='text-center text-white'>Create Account</h2>
                    <input className='form-control mb-3' type="text" name="name" placeholder='Name' required />
                    <input onBlur={handleEmail} className='form-control mb-3' type="text" name="email" placeholder='Email' required />
                    <input onBlur={handlePassword} className='form-control mb-3' type="text" name="password" placeholder='Password' required />
                    <input onBlur={handleConfirm} className='form-control mb-3' type="text" name="confirm" placeholder='Confirm Password' required />
                    <p className='show-error-msg text-danger'>{error}</p>
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