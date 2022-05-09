import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import Header from '../Header/Header';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const handleAddItem = data => {
        const url = 'https://blooming-lowlands-09292.herokuapp.com/inventory';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast.success('Item added Successfully')
                }
            })
        // eslint-disable-next-line no-restricted-globals
        event.target.reset();
    }
    return (
        <div>
            <Header></Header>
            <div className='mt-5 py-5 mx-auto login-section'>
            <div className='mt-5 py-5 login-container col-sm-8 col-lg-4 mx-auto'>
                <h2 className='text-center text-white'>Please add a Item</h2>
                <form onSubmit={handleSubmit(handleAddItem)} className='d-flex flex-column input-container'>
                    <input className='form-control mb-3' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='form-control mb-3' value={user.email} placeholder='Email' {...register("email", { required: true })} required />
                    <textarea className='form-control mb-3 bg-dark text-white' placeholder='Description' {...register("description")} />
                    <input className='form-control mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='form-control mb-3' placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                    <input className='form-control mb-3' placeholder='Stock' {...register("quantity", { required: true })} />
                    <input className=' form-control mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true })} />
                    <input className='form-control btn btn-info' type="submit" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddItems;