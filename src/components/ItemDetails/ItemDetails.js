import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './ItemDetails.css';

const ItemDetails = () => {
    const { productId } = useParams();
    const [items, setItems] = useState({});
    const { _id, name, price, description, img, supplierName, quantity } = items;

    useEffect(() => {

        const getItemById = async () => {
            const url = `https://blooming-lowlands-09292.herokuapp.com/inventory/${productId}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getItemById();
    }, [items, productId])

    // DELIVERED
    const handleDelivered = (id) => {
        const getQuantity = async () => {
            const newUpdate = { quantity }
            const url = `https://blooming-lowlands-09292.herokuapp.com/delivered/${_id}`
            const { data } = await axios.put(url, newUpdate)
            console.log(data)
            if (data.modifiedCount) {
                toast.success('Successfully Delivered', { id: 'test' })
            };
        }
        getQuantity();
    };

// ADD TO STOCK
    const handleAddToStock = async (event) => {
        event.preventDefault();

        const getQuantity = event.target.add.value;
        if (getQuantity >= 1) {
            const newQuantity = parseInt(getQuantity) + parseInt(quantity);

            const url = `https://blooming-lowlands-09292.herokuapp.com/addtostock/${productId}`;
            const { data } = await axios.put(url, { newQuantity });

            if (data.modifiedCount === 1 || data.matchedCount === 1) {
                toast.success('Successfully added to stock')
            }
        };

        event.target.reset();

    }

    return (
        <div className='mt-5 py-5 section h-auto'>
            <Header></Header>
            <h2 className='text-center text-light my-4'> <span className='text-info bg-gradient p-2 rounded-3'>Car Details: {name}</span></h2>

            <div className='card-container col-lg-6 mx-3 mx-lg-auto'>
                <div className="card h-100 bg-dark text-white border-danger">
                    <img src={img} className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{description}</p>
                        <p className='mb-1'>Price: <span className='text-warning fw-bold'>{price}</span></p>
                        <p className='mb-1'>Supplier: <span className='text-info fw-bold'>{supplierName}</span></p>
                        <p className='mb-1'>Available Stock: <span className='text-danger fw-bold'>{quantity?quantity: 'Out of Stock'}</span></p>
                    </div>
                </div>
            </div>

            <div className='container mt-2'>
                <div className='col-sm-12 col-lg-6 mx-auto d-flex'>
                    <div className='col-lg-12 me-1 my-2'>
                        <form onSubmit={handleAddToStock} className='form-floating d-flex flex-lg-row stock'>
                            <input type="number" name="add" className='form-control me-3 w-100' id="floatingInput" placeholder="Add Quantity" />
                            <label htmlFor='floatingInput' className='text-white'>Add Quantity</label>
                            <input className='w-100 btn btn-outline-danger w-100 mx-auto text-white mx-3 mt-0 mb-4 py-3' type="submit" value="Add to Stock" />
                        </form>
                    </div>
                </div>
                <div className='col-sm-12 col-lg-6 mx-auto'>
                    <button onClick={handleDelivered} className='btn btn-outline-danger w-100 mx-auto text-white mx-3 mt-0 mb-4'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;