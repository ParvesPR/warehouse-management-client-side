import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    };

    if (!user.emailVerified) {
        return <div className='text-center mt-5'>
            <h4 className='text-danger'>Email is not verified!!</h4>
            <h5 className='text-success'> Please Verify your email</h5>
            <button
            className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Verification email sending');
                }}
            > Send Again
            </button>
        </div>
    }

    return children
};

export default RequireAuth;