import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, price, description, img, supplierName, quantity } = product
    return (
                <div className='card-container'>
                    <div className="card h-100 bg-dark text-white border-danger">
                        <img src={img} className="card-img-top card-image" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{description}</p>
                            </div>
                    </div>
                </div>
            );
};

            export default Product;