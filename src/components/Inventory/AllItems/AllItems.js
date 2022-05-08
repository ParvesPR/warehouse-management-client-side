import { Link, useNavigate } from 'react-router-dom';

const AllItems = ({ product, load, setLoad }) => {
    const { _id, name, price, description, img, supplierName, quantity } = product;
    const navigate = useNavigate();
    const navigateToItemDetails = id => {
        navigate(`/inventory/${id}`)
    }

    // DELETE ITEM
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setLoad(!load)
                })
        }
    }
    return (
        <div className='card-container'>
            <div className="card h-100 bg-dark text-white border-danger">
                <img src={img} className="card-img-top card-image" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <p className='mb-1'>Price: <span className='text-warning fw-bold'>{price}</span></p>
                    <p className='mb-1'>Supplier: <span className='text-info fw-bold'>{supplierName ? supplierName : 'N/A'}</span></p>
                    <p className='mb-1'>Available Stock: <span className='text-danger fw-bold'>{quantity ? quantity : 'Out of Stock'}</span></p>
                </div>
                <div className='d-flex justify-align-content-around'>
                    <button onClick={() => navigateToItemDetails(_id)} className='btn btn-outline-danger w-25 mx-auto text-white mx-3 mt-0 mb-4'>Update</button>
                    <button onClick={() => handleDelete(product._id)} className='btn btn-outline-warning w-25 mx-auto text-white mx-3 mt-0 mb-4'>Delete</button>
                    <button className='btn btn-outline-info w-25 mx-auto text-white mx-3 mt-0 mb-4'><Link className='text-decoration-none' to="/additem">Add Item</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AllItems;