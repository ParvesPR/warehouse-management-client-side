import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [items, setItems] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {

        const getItems = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url)
            setItems(data)
        }
        getItems();


    }, [user])

    return (
        <div className='mt-5 py-5 container-fluid'>
            <h1>My Items: {items.length}</h1>
            {
                items.map(item => console.log(item.name))
            }
        </div>
    );
};

export default MyItems;