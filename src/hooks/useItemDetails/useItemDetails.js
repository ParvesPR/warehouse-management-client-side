import { useEffect, useState } from 'react';

const useItemDetails = productId => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [productId])
    return [items]
};

export default useItemDetails;