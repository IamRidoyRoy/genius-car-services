import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import SocialLogin from './SocialLogin/SocialLogin'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Reset Password 
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter an email!')
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log({ email, password });
        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    if (error) {
        errorElement = (
            <div>
                <p className='text-danger text-center'><b>Error:</b> {error?.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }
    return (

        <div className='container w-50 mt-2'>
            <h2 className='text-primary text-center mb-2'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-75  m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button className='d-block m-auto w-50' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='text-center mt-2'>Forgot Password? <button className=' btn btn-link text-danger pe-auto text-decoration-none' onClick={handleResetPassword}><b>Reset Password</b></button></p>
            <p className='text-center mt-2'>New to genius car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}><b>Please Register</b></Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />

            <PageTitle title='Login'></PageTitle>

        </div>
    );
};

export default Login;