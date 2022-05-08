import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import { toast } from 'react-toastify';
import GoogleSignIn from './GoogleSignIn/GoogleSignIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    let errorMsg;

    if (loading || sending) {
        return <Loading></Loading>
    };
    if (user) {
        navigate(from, { replace: true });
    };
    if (error) {
        errorMsg = <p className='text-danger fw-bold'>Error:{error?.message}</p>
    }
    const handleSingIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Successfully sent email');
        }
        else {
            toast('Please provide a valid email');
        }
    }

    return (
        <div className='login-section'>
            <div className='mt-5 py-5 login-container col-sm-8 col-lg-4 mx-auto '>
                <form onSubmit={handleSingIn} className='input-container'>
                    <h2 className='text-center text-white'>Login Here</h2>
                    <input className='form-control mb-3' ref={emailRef} type="text" name="email" placeholder='Email' required/>
                    <input className='form-control mb-3' ref={passwordRef} type="text" name="password" placeholder='Password' required/>
                    <input className='form-control btn btn-info' type="submit" value="Submit" />
                    {errorMsg}
                    <p className='mb-0 text-white py-2'>Don't have an account? <Link className='text-decoration-none' to="/register">Create Account</Link></p>
                    <p className='text-white mt-0'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                </form>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    )
};

export default Login;