import React from 'react';
import {Link} from 'react-router-dom';

//REDUX
import {useDispatch} from 'react-redux';
import {deleteProductAction} from './actions/productActions';



const Product = ({product}) => {
    
    const { name, price, id} = product;

    const dispatch = useDispatch();
    
    //confirm if the user wnatd to delete
    const confirmDeleteProduct = id => {
        //ask 

        //action
        dispatch(deleteProductAction(id))
    }


    return(
        <tr>
            <td>{name}</td>
            <td><span className='font-weight-bold'> $ {price} </span></td>
            <td className='actions'>
                <Link to={`/products/edit/${id}`} className='btn btn-primary mr-2'>
                    Editar
                </Link>
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