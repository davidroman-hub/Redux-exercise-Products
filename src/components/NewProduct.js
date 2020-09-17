import React,{ useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';

//useDispatch => we can use to execute the actions that we have
//useSelector => Access to state inside the component



// Actions redux
import  { createNewProductAction } from '../components/actions/productActions';
import { showAlert, hideAlertAction } from './actions/alertActions'



const NewProducts = ({history}) => {


    // state component, and we can use this because the state only will work here.
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0)



    //use useDispatch and create a function

    const dispatch = useDispatch()


    //use useSelector access to the state store

    const charging = useSelector( state => state.productss.loading);
    const error  = useSelector(state => state.productss.error);
    const alert = useSelector(state => state.alertss.alert);
    


    console.log(charging)
    //call the action from productAction

    const addProduct = (product) => dispatch (
        createNewProductAction(product)
    )


    // when the user use submit exec 

    const submitNewProduct = e => {
        e.preventDefault() 
        
        // validate form
            if(name.trim() === '' || price <= 0){
                const response = {
                    msg:'All the fields are necessary!',
                    class:'alert alert-danger text-center text-upppercase p3'
                }
                dispatch(showAlert(response));
                return;
            }
        // if not errors
            dispatch( hideAlertAction() )
        //create new Product
        addProduct({
            name,
            price
        })


        //redirect to the list we use push
        history.push('/')



    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 '>
                            Add New Product
                        </h2>
                            {alert ? <p className={alert.class}> {alert.msg}</p> : null}
                        <form 
                            onSubmit ={ submitNewProduct }
                        >

                            <div className='form-group'>
                                <label>Product Name</label>
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Poduct Name'
                                name='name'
                                value={name}
                                onChange= {e => setName(e.target.value)}
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
                                onChange= {e => setPrice(Number(e.target.value))}
                                />
                            </div>
                            <button 
                                type='submit'
                                className='btn btn-primary  text-upercase d-block w-100'>
                                    Add
                                </button>
                        </form>
                        {charging ? <p>Loading...</p> : null}
                        {error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts