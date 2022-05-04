import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='banner-container col-lg-12'>
            <div className='col-lg-12 h-auto banner'>
                <div className='col-lg-12 text-white p-5'>
                    <p className='text-success text-uppercase fw-bold mb-4
                     sub-title'>Top Brands <span className='text-white-50'>used car</span></p>
                <h1 className='text-uppercase title-one mb-0'>Modern-Classic</h1>
                <h1 className='text-uppercase title-two'>Decorate</h1>
                </div>
                <button className='btn btn-outline-danger banner-btn'>Inventory</button>
            </div>
        </div>
    );
};

export default Home;