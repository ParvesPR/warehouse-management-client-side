import React from 'react';
import img from '../../images/img1.png';
import img2 from '../../images/img2.png'

const Section1 = () => {
    return (
        <div className='row mt-3 mx-1'>
                <div className='col-sm-12 col-lg-6 mb-3'>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className='img-fluid' src={img2} alt="" />
                </div>
            </div>
    );
};

export default Section1;