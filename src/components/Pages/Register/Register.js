import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useState } from 'react';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // Update Profile 
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home');
    }
    if (user) {
        console.log(user);
    }

    return (
        <div className='container w-50 mt-2'>
            <h2 className='text-primary text-center mb-5'>Please Register</h2>
            <Form onSubmit={handleRegister} className='w-75  m-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Your Name" />
                </Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <div className='text-center'>
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                </div>
                <Button disabled={!agree}
                    className='w-50 d-block m-auto mt-2' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center mt-1'>Already Registered? <Link to='/login' className='text-primary pe-auto text-decoration-none'><b>Please Login</b> </Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;