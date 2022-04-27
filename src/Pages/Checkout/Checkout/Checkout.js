import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../useServices/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    if (user) {
        console.log(user);
    }
    /*   const [user, setUser] = useState({
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
      } */

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://glacial-basin-08430.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast.success("Your order is booked");
                    event.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h5>Please order: {service.name}</h5>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type='text' value={user.displayName} name='name' placeholder='Enter your name' required readOnly disabled /><br />
                <input className='w-100 mb-2' type='email' value={user.email} name='email' placeholder='Enter your email' required readOnly disabled /><br />
                <input className='w-100 mb-2' type='text' value={service.name} name='service' placeholder='Enter your service' required readOnly /><br />
                <input className='w-100 mb-2' type='text' name='address' placeholder='Enter your address' required autoComplete='off' /><br />
                <input className='w-100 mb-2' type='text' value={user.phone} name='phone' placeholder='Enter your phone' required /><br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default Checkout;