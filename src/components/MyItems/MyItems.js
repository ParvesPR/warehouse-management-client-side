import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Header from '../Header/Header';
import './MyItems.css';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [load, setLoad] = useState(false)
    const [user] = useAuthState(auth);
    useEffect(() => {

        const getItems = async () => {
            const email = user?.email;
            const url = `https://blooming-lowlands-09292.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data)
            console.log(data)
        }
        getItems();


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    const handleDelete = product => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://blooming-lowlands-09292.herokuapp.com/myitems/${product}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setLoad(!load)
                })
        }
    }

    return (
        <div className='mt-5 py-5 container-fluid'>
            <Header></Header>
            <h1>My Items: {items.length}</h1>
            {
                items.map(item =>
                    <div key={item._id} className='container d-flex mx-auto bg-secondary text-white p-3'>
                        <div className="col-lg-8 d-flex  mb-3 border-2">
                            <img src={item.img} className='w-25' alt="" />
                            <div className='ms-3'>
                                <p>{item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Description: {item.description}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleDelete(item._id)} className='btn btn-danger text-white '>X
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItems;