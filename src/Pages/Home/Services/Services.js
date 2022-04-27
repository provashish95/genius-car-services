import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://glacial-basin-08430.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <div id='services' className='container'>
            <div className="row mt-5 g-5">
                <h2 className='text-info text-center my-3'>Our Services: {services.length}</h2>
                <div className='services-container'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;