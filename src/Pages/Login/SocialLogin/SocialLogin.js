import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={google} alt="googleLogo" />
                    <span className='px-2 fw-bold'> Google sign in</span>
                </button>
                <button className='btn btn-info w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={github} alt="googleLogo" />
                    <span className='px-2 fw-bold'>GitHub sign in</span>
                </button>
                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="googleLogo" />
                    <span className='px-2 fw-bold'> Facebook sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;