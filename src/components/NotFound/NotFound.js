import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/404.gif';

const NotFound = () => {
    return (
        <div  className='row mx-auto w-100'>
            <div className='col-lg-12'>
            <h1 className='text-center text-danger'>Page Not found</h1>
            <Link to="/home"><h6>Back to Home</h6></Link>
            <img src={image} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default NotFound;