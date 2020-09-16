import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listAllProductsAction} from '../components/actions/productActions';


const Products = () => {

    const dispatch = useDispatch();
    
    const productsInit = () => dispatch(listAllProductsAction());

    useEffect(() => {
        //API
        productsInit()
    },[])


    return(
        <>
        <h2 className='text-center my-5'>Products List</h2>
            <table className=' table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Accions</th>
                    </tr>
                </thead>        
            </table>
        </>
    )
}

export default Products