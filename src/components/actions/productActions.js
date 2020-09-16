// this is the functions to modify the state

// we have to map all the types
import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR

} from '../types/indexTypes'
// import axios
import clientAxios from '../../config/axios';
// import sweet alert
import Swal from 'sweetalert2';



/// Create new production

export function createNewProductAction (product){
    return async (dispatch) => {
        // console.log('desde action')
        // console.log(product)

        dispatch(addProduct() );

        //consult database
        try{
            // insert API
            await clientAxios.post('/productos', product);
            //if everything good

            dispatch(addProductSuccess(product))
            //Alert success
            Swal.fire(
                'Correct!',
                'The Product is saved Correctly!',
                'success'
            )
        }catch(error){
            console.log(error)
            // dispatch execute the the actions (functions)
            dispatch(addProductError(true))

            //Alert Error
            Swal.fire({
                icon:'error',
                title:'Exist an Error!',
                text:'Something went wrong to save in the Database, try Again'
            })
        }
    }
}

const addProduct = () => ({
    //types descriptions of your application

    type:ADD_PRODUCT,
    // paylod modify the state
    payload:true
})

// if the product save is success in the data base

const addProductSuccess = product => ({
    type:ADD_PRODUCT_SUCCESS,
    payload:product
})

// if is a error

const addProductError = state => ({
    type:ADD_PRODUCT_ERROR,
    payload:state
})