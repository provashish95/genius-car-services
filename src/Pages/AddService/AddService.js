import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://glacial-basin-08430.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-center'>This is add service</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column" >
                <input className='mb-2' placeholder='Enter your name' {...register("name", { required: true })} />
                <textarea className='mb-2' placeholder='Write your description' {...register("description")} />
                <input className='mb-2' placeholder='Enter your price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Enter your Photo' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;