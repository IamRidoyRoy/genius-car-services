import React from 'react';
import Google from '../../../../images/social/Google.png';
import Facebook from '../../../../images/social/Facebook.png';
import Github from '../../../../images/social/GitHub.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
                <p className='mt-3 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>  </div>
            </div>
            <button className=' btn btn-info w-50 d-block mx-auto my-2'>
                <img height={30} src={Google} alt="" />
                <span className='px-2'>Google SignIn</span>
            </button>
            <button className=' btn btn-dark w-50 d-block mx-auto my-2'>
                <img height={30} src={Facebook} alt="" />
                <span className='px-2'>Facebook</span>
            </button>
            <button className=' btn btn-warning w-50 d-block mx-auto my-2'>
                <img height={30} src={Github} alt="" />
                <span className='px-2'>GitHUb</span>
            </button>
        </div>
    );
};

export default SocialLogin;