import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(data);
        }
        getOrders();
    }, [user]);


    return (
        <div>
            <h4>Your orders: {orders.length}</h4>
        </div>
    );
};

export default Order;