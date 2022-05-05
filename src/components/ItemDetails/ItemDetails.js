import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetails from '../../hooks/useItemDetails/useItemDetails';
import './ItemDetails.css';

const ItemDetails = () => {
    const { productId } = useParams();
    const [items] = useItemDetails(productId);
    return (
        <div className='mt-5 py-5 section h-auto'>
            <h2 className='text-center text-light'>Details of Car: <span className='text-success'>{items.name}</span></h2>
        </div>
    );
};

export default ItemDetails;