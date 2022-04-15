import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {


    const location = useLocation();
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;


    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }



    return (
        <div className='container w-50 mx-auto'>
            <h4 className='text-primary text-center mt-2'>Login page</h4>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to genius car? <span className='text-primary btn' onClick={navigateRegister}>Please Register</span></p>
            {
                errorElement
            }
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;