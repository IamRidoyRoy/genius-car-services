import React from 'react';
import Google from '../../../../images/social/Google.png';
import Facebook from '../../../../images/social/Facebook.png';
import Github from '../../../../images/social/GitHub.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init'
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    // Signin with Google 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // Signin with Github 
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    const navigate = useNavigate();
    if (error || error1) {
        errorElement = (
            <div>
                <p className='text-danger text-center'><b>Error:</b> {error?.message}{error1?.message}</p>
            </div>
        );
    }
    if (loading || loading1) {
        return <p className='text-center'>Loading...</p>;
    }
    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()}
                className=' btn btn-info w-50 d-block mx-auto my-2'>
                <img height={30} src={Google} alt="" />
                <span className='px-2'>Google SignIn</span>
            </button>
            <button className=' btn btn-dark w-50 d-block mx-auto my-2'>
                <img height={30} src={Facebook} alt="" />
                <span className='px-2'>Facebook</span>
            </button>
            <button onClick={() => signInWithGithub()} className=' btn btn-warning w-50 d-block mx-auto my-2'>
                <img height={30} src={Github} alt="" />
                <span className='px-2'>GitHUb</span>
            </button>
        </div>
    );
};

export default SocialLogin;