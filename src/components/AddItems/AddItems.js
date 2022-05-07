import React, { useRef } from 'react';

const AddItems = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const priceRef = useRef('');
    return (
        <div className='mt-5 py-5 mx-auto login-section'>
            <form className='input-container w-50'>

                <h2 className='text-center text-white'>Please add a item</h2>
                <input className='form-control mb-3' ref={emailRef} type="email" name="email" placeholder='Email' required />
                <input className='form-control mb-3' ref={nameRef} type="text" name="name" placeholder='Name' required />
                <textarea className='   w-100 bg-dark text-white' name="comment" placeholder='Description'></textarea>
                <input className='form-control mb-3' ref={priceRef} type="number" name="price" placeholder='Price' required />
                <input className='form-control btn btn-info' type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default AddItems;