import React from 'react';
import img1 from '../../images/img3.png'
import img2 from '../../images/img4.png'
import img3 from '../../images/img5.png'
import img4 from '../../images/img6.png'

const Section2 = () => {
    return (
        <div className='container mt-2'>
            <div className='row mx-auto text-center'>
                <div className='col-sm-6 col-lg-3 mb-2'>
                    <img className='img-fluid' src={img1} alt="" />
                    <h5>World's #1</h5>
                    <p className='text-muted'>Largest Auto Dealer</p>
                </div>
                <div className='col-sm-6 col-lg-3 mb-2'>
                    <img className='img-fluid' src={img2} alt="" />
                    <h5>Car Shipped</h5>
                    <p className='text-muted'>Every 4 minute</p>
                </div>
                <div className='col-sm-6 col-lg-3 mb-2'>
                    <img className='img-fluid' src={img3} alt="" />
                    <h5>Offers</h5>
                    <p className='text-muted'>Stay updated pay less</p>
                </div>
                <div className='col-sm-6 col-lg-3 mb-2'>
                    <img className='img-fluid' src={img4} alt="" />
                    <h5>Compare</h5>
                    <p className='text-muted'>Decode the right car</p>
                </div>
            </div>
        </div>
    );
};

export default Section2;