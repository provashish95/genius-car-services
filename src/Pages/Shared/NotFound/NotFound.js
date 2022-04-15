import React from 'react';
import errorImg from '../../../images/404 page.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-center text-info fw-bold'>Mechanic is sleeping....</h2>
            <img className='w-100' src={errorImg} alt="errorImg" />
        </div>
    );
};

export default NotFound;