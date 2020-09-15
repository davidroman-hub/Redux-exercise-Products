import React from 'react';

const NewProducts = () => {
    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 '>
                            Add New Product
                        </h2>
                        <form>
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