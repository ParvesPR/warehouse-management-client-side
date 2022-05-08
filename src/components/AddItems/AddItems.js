import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const handleAddItem = data => {
        console.log(data)
        const url = 'http://localhost:5000/inventory';
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
        <div className='mt-5 py-5 mx-auto login-section'>
            <div className='mt-5 py-5 login-container col-sm-8 col-lg-4 mx-auto'>
                <h2 className='text-center text-white'>Please add a Item</h2>
                <form onSubmit={handleSubmit(handleAddItem)} className='d-flex flex-column input-container'>
                    <input className='form-control mb-3' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='form-control mb-3 bg-dark text-white' placeholder='Description' {...register("description")} />
                    <input className='form-control mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className=' form-control mb-2' placeholder='Photo URL' type="text" {...register("img",)} />
                    <input className='form-control btn btn-info' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;