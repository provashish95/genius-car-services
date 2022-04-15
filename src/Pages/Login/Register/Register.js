import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateRegister = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    console.log(agree);

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.userName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        //  const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }

    }
    return (
        <div className='container w-50 mx-auto'>
            <h4 className='text-primary text-center mt-2'>Registration</h4>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='userName' placeholder="Enter Your name.." required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    {/* <Form.Check onClick={() => setAgree(!agree)} className={agree ? 'text-primary' : 'text-danger'} id='terms' name='terms' type="checkbox" label="Accept genius car terms and condition" /> */}
                    <Form.Check onClick={() => setAgree(!agree)} className={`fw-bold ${agree ? '' : 'text-danger'}`} id='terms' name='terms' type="checkbox" label="Accept genius car terms and condition" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
            <p>Already have an account? <span className='text-primary btn' onClick={navigateRegister}>Login </span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;