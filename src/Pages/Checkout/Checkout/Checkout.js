import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../useServices/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    return (
        <div className='w-50 mx-auto'>
            <h5>Please order: {service.name}</h5>
            <form>
                <input type='text' name='name' placeholder='Enter your name' required />
            </form>
        </div>
    );
};

export default Checkout;