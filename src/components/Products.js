import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {listAllProductsAction} from '../components/actions/productActions';
import Product from './Product';


const Products = () => {

    const dispatch = useDispatch();
    
    const productsInit = () => dispatch(listAllProductsAction());

    useEffect(() => {
        //API
        productsInit()
    },[])

    // bring the state

    const products = useSelector(state => state.productss.products);
    //console.log(products)

    const error = useSelector( state =>  state.productss.error);
    const charging = useSelector( state => state.productss.loading);
    return(
        <>
        <h2 className='text-center my-5'>Products List</h2>

        {error ? 
            <p className='font-weight-bold alert alert-danger text-center mt-4'>
                Exist an Error with the DataBase!</p>: null }  

        {charging ? <p className='text-center'>Cargando...</p> : null}        

            <table className=' table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Accions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length  === 0 ? "No products" : (
                        products.map(product => (
                            <Product
                                key={product.id}
                                product={product}

                            />
                        ))
                    )}
                </tbody>        
            </table>
        </>
    )
}

export default Products