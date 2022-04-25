import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <h2 className='text-center'>Your booking Service Name: {service.name}</h2>
            <div className="container">
                <p>Price : {service.price}</p>
                <p>About service : {service.description}</p>
                <img src={service.img} alt="img" />
            </div>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary text-center'>Proceed to checkout!</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;