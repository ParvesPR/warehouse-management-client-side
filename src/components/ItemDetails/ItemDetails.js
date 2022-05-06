import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails/useItemDetails';
import './ItemDetails.css';

const ItemDetails = () => {
    const { productId } = useParams();
    const [items] = useItemDetails(productId);
    return (
        <div className='mt-5 py-5 section h-auto'>
            <h2 className='text-center text-light my-4'> <span className='text-info bg-gradient p-2 rounded-3'>Car Details: {items.name}</span></h2>

            <div className='card-container col-lg-6 mx-3 mx-lg-auto'>
                <div className="card h-100 bg-dark text-white border-danger">
                    <img src={items.img} className="card-img-top card-image" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{items.name}</h4>
                        <p className="card-text">{items.description}</p>
                        <p className='mb-1'>Price: <span className='text-warning fw-bold'>{items.price}</span></p>
                        <p className='mb-1'>Supplier: <span className='text-info fw-bold'>{items.supplierName}</span></p>
                        <p className='mb-1'>Available Stock: <span className='text-danger fw-bold'>{items.quantity}</span></p>
                    </div>
                </div>
            </div>

            <div className='container mt-2'>
                <div className='col-sm-12 col-lg-6 mx-auto d-flex'>
                    <div className='col-lg-6 me-1 my-2'>
                        <div className='form-floating mb-3'>
                            <input type="number" className='form-control' id="floatingInput" placeholder="Add Quantity" />
                            <label htmlFor='floatingInput'>Add Quantity</label>
                        </div>
                    </div>
                    <div className='col-lg-6 my-2'>
                        <button className='btn btn-outline-danger w-100 mx-auto text-white mx-3 mt-0 mb-4 py-3'>Add to Stock</button>
                    </div>

                </div>
                <div className='col-sm-12 col-lg-6 mx-auto'>
                    <button className='btn btn-outline-danger w-100 mx-auto text-white mx-3 mt-0 mb-4'>Delivered</button>
                </div>
            </div>

        </div>
    );
};

export default ItemDetails;