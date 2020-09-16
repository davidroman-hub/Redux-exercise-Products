import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { editProductAction } from'./actions/productActions';
import {useHistory} from 'react-router-dom';



const EditProducts = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    
    //new product state

    const [product, saveProduct] = useState({
        name:'',
        price:'',
    })
    

    //Product to edit
    //bring it from the state using useSelector

    const productEdit = useSelector(state => state.productss.productedit)
    //console.log(product)
    // when you reload the state is lost, so to prevent: because the state is inside the memory 
    //if(!product) return null;

    useEffect(() => {
        saveProduct(productEdit)
    },[productEdit])

    const {name, price} = product;

    //read data from form

    const onChangeForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }


    const submitEditProduct = e => {
        e.preventDefault();
        dispatch( editProductAction(product))
        history.push('/');
    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 '>
                            Edit Product
                        </h2>
                        <form
                        onSubmit={submitEditProduct}
                        >
                            <div className='form-group'>
                                <label>Product Name</label>
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Poduct Name'
                                name='name'
                                value={name}
                                onChange={onChangeForm}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Product Price</label>
                                <input
                                type='number'
                                className='form-control'
                                placeholder='Poduct Price'
                                name='price'
                                value={price}
                                onChange={onChangeForm}
                                />
                            </div>
                            <button 
                                type='submit'
                                className='btn btn-primary  text-upercase d-block w-100'>
                                    Save Changes
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProducts