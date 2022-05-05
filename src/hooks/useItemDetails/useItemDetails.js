import { useEffect, useState } from 'react';

const useItemDetails = id => {
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [id])
    return [items]
};

export default useItemDetails;