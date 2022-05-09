import { useEffect, useState } from 'react';

const useItemDetails = productId => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `https://blooming-lowlands-09292.herokuapp.com/inventory/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [productId])
    return [items]
};

export default useItemDetails;