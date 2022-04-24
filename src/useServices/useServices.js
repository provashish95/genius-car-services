import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServices = () => {
    const [services, setServices] = useState([]);
    const { serviceId } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/service`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices];
};

export default useServices;