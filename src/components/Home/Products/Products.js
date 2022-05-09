import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-lowlands-09292.herokuapp.com/products')
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
                <Link to="/inventory" className='my-4 col-sm-12 col-lg-6 mx-auto btn btn-outline-danger text-white'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default Products;