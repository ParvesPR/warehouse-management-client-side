import { useEffect, useState } from "react";

const useItem = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://blooming-lowlands-09292.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
};

export default useItem;