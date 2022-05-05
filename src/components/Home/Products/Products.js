import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <div className='section py-5'>
                <h2 className='text-uppercase text-center py-3 fw-bolder text-white'>Top Brands : <span className='text-light'>{products.length}</span></h2>
                    <div className='product-container mx-3'>
                    {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
                    </div>
                </div>
            </div>
    );
};

export default Products;