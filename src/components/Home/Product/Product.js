import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, price, description, img, supplierName, quantity } = product;
    const navigate = useNavigate();

    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='card-container'>
            <div className="card h-100 bg-dark text-white border-danger">
                <img src={img} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <p className='mb-1'>Price: <span className='text-warning fw-bold'>{price}</span></p>
                    <p className='mb-1'>Supplier: <span className='text-info fw-bold'>{supplierName}</span></p>
                    <p className='mb-1'>Available Stock: <span className='text-danger fw-bold'>{quantity}</span></p>
                </div>
                <button onClick={() => navigateToItemDetails(_id)} className='btn btn-outline-danger w-50 mx-auto text-white mx-3 mt-0 mb-4'>Update</button>
            </div>
        </div>
    );
};

export default Product;