import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import AllItems from './AllItems/AllItems';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [load]);
    return (
        <div>
            <Header></Header>
            <div className='section py-5 mt-5'>
                <h2 className='text-uppercase text-center py-3 fw-bolder text-white'>Available Items: <span className='text-danger fw-bold'>{inventory.length}</span></h2>
                <div className='product-container mx-3'>
                    {
                        inventory.map(product => <AllItems
                            key={product._id}
                            product={product}
                            load={load}
                            setLoad={setLoad}
                        ></AllItems>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;