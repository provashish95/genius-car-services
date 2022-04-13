import React from 'react';
import './Experts.css';
import experts1 from '../../../images/experts/expert-1.jpg';

const Experts = () => {
    return (
        <div>
            <h2 className='text-info'>Our Experts </h2>
            <img src={experts1} alt="" />
        </div>
    );
};

export default Experts;