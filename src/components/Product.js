import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';

//REDUX
import {useDispatch} from 'react-redux';
import {deleteProductAction, fetchProductEdit} from './actions/productActions';




const Product = ({product}) => {
    
    const { name, price, id} = product;

    const dispatch = useDispatch();
    const history = useHistory(); // to use history to redirect

    //confirm if the user wanted to delete
    const confirmDeleteProduct = id => {
        //ask 
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText:'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
            //action
            dispatch(deleteProductAction(id))
            }
        })
    }

    // re-program function to redirect
    // to pass with history the information of the product when we pick
    const redirectEdit = product => {
        dispatch(fetchProductEdit(product));
        history.push(`/products/edit/${product.id}`)
    }

    return(
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'> $ {price} </span></td>
            <td className='actions'>
                <button 
                    type='button'
                    onClick={() => redirectEdit(product)}
                    className='btn btn-primary mr-2'>
                    Editar
                </button>
                <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmDeleteProduct(id)}
                    >Delete</button>
            </td>
        </tr>
    )
}

export default Product