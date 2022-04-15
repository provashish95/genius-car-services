import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import facebook from '../../../images/social/facebook.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    let errorElement;

    if (error || gitError || facebookError) {
        errorElement = <p className='text-danger'>Error: {error?.message}  {gitError?.message} {facebookError?.message}</p>
    }

    if (user || gitUser || facebookUser) {
        navigate('/home');
    }





    return (
        <div>
            <div className='d-flex align-items-center my-2'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={google} alt="googleLogo" />
                    <span className='px-2 fw-bold'> Google sign in</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 mx-auto d-block  my-2'>
                    <img style={{ width: '30px' }} src={github} alt="googleLogo" />
                    <span className='px-2 fw-bold'>GitHub sign in</span>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="googleLogo" />
                    <span className='px-2 fw-bold'> Facebook sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;