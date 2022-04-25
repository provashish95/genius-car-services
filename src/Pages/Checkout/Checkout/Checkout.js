import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../useServices/useServiceDetails';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user, setUser] = useState({
        name: 'Provashish Roy',
        email: 'prova@gmail.com',
        address: 'Ghior Manikgonj',
        phone: '01766552407'
    });

    const handleAddressChange = e => {
        console.log(e.target.value);
        const { address, ...rest } = user;
        const newAddress = e.target.value;
        const newUser = { address: newAddress, ...rest };
        setUser(newUser);
    }

    return (
        <div className='w-50 mx-auto'>
            <h5>Please order: {service.name}</h5>
            <form>
                <input className='w-100 mb-2' type='text' value={user.name} name='name' placeholder='Enter your name' required /><br />
                <input className='w-100 mb-2' type='email' value={user.email} name='email' placeholder='Enter your email' required /><br />
                <input className='w-100 mb-2' type='text' onChange={handleAddressChange} value={user.address} name='address' placeholder='Enter your address' required /><br />
                <input className='w-100 mb-2' type='text' value={service.name} name='service' placeholder='Enter your service' required /><br />
                <input className='w-100 mb-2' type='text' value={user.phone} name='phone' placeholder='Enter your phone' required /><br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default Checkout;