import React from 'react';
import useServices from '../../useServices/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    console.log(services);

    const handleDelete = (id) => {
        const procced = window.confirm("Are you sure ? ");
        if (procced) {
            const url = `https://glacial-basin-08430.herokuapp.com/service/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(result => {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>All services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h4>
                        {service.name}
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </h4>
                </div>)
            }
        </div>
    )
};

export default ManageServices;