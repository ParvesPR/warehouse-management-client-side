import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid'>
            <div className='bg-dark py-4 text-center'>
                <h4 className='text-white'>Copyright</h4>
                <p className='text-white'>All right reserve &copy; Car Deals {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;