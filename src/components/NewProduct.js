import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
//useDispatch => we cna use to execute the actions that we have
//useSelector => Access to state inside the component



// Actions redux
import  { createNewProductAction } from '../components/actions/productActions';

const NewProducts = () => {


    //use useDispatch and create a function

    const dispatch = useDispatch()


    //call the action from productAction
    
    const addProduct = () => dispatch (
        createNewProductAction()
    )


    // when the user use submit exec 

    const submitNewProduct = e => {
        e.preventDefault() 
        
        // validate form

        // if not errors

        //create new Product
        addProduct()

    }


    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 '>
                            Add New Product
                        </h2>
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
                                />
                            </div>
                            <div className='form-group'>
                                <label>Product Price</label>
                                <input
                                type='number'
                                className='form-control'
                                placeholder='Poduct Price'
                                name='price'
                                />
                            </div>
                            <button 
                                type='submit'
                                className='btn btn-primary  text-upercase d-block w-100'>
                                    Add
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts