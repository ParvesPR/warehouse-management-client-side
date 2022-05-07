import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Loading/Loading';
import './GoogleSignIn.css';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMsg;
    if (loading) {
        return <Loading></Loading>
    };

    if (error) {
        errorMsg = <p className='text-danger fw-bold'>Error: {error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    };

    return (
        <div>
            <div className='d-flex align-items-center text-center'>
                <p className='w-50 me-2 divider1 mx-auto'></p>
                <p className='text-white mx-3 mx-auto'>or</p>
                <p className='w-50 ms-2 divider2 mx-auto'></p>
            </div>
            <div className='mx-auto text-center'>
                <button onClick={() => signInWithGoogle()} className='w-100 btn btn-outline-light submit-btn'>Continue with Google</button>
            </div>
            {errorMsg}
        </div>
    );
};

export default GoogleSignIn;