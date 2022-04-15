import React from 'react';
import './Experts.css';
import experts1 from '../../../images/experts/expert-1.jpg';
import experts2 from '../../../images/experts/expert-2.jpg';
import experts3 from '../../../images/experts/expert-3.jpg';
import experts4 from '../../../images/experts/expert-4.jpg';
import experts5 from '../../../images/experts/expert-5.jpg';
import experts6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: 'Will smith', img: experts1 },
    { id: 2, name: 'Stives Jobs', img: experts2 },
    { id: 3, name: 'Mark ju bark', img: experts3 },
    { id: 4, name: 'Shell wilims', img: experts4 },
    { id: 5, name: 'The duck', img: experts5 },
    { id: 6, name: 'Provashish', img: experts6 }
]
// create manually data here form video no: 6 of module :  ok .......


const Experts = () => {
    return (
        <div id='experts' className='container my-5'>
            <h2 className='text-info text-center'>Our Experts </h2>
            <div className="row ">
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;