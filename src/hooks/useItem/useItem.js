import { useEffect, useState } from "react";

const useItem = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
};

export default useItem;