import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, error] = useSendEmailVerification(auth);

    if (error) {
        return (
            <div>
                <p className='text-center text-danger'>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='d-flex justify-content-center align-items-center'>
            <div>
                <h3 className='text-danger'>Your Email is not Verified</h3>
                <h2 className='text-success'>Please Verify your email address</h2>
                <button className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send again
                </button>
                <ToastContainer></ToastContainer>
            </div>

        </div >
    }
    return children;

};

export default RequireAuth;