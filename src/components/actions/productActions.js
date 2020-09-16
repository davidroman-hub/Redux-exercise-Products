// this is the functions to modify the state

// we have to map all the types
import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR

} from '../types/indexTypes'

/// Create new production

export function createNewProductAction (product){
    return (dispatch) => {
        // console.log('desde action')
        // console.log(product)

        dispatch(addProduct() );

        //consult database
        try{
            dispatch(addProductSuccess(product))
        }catch(error){
            // dispatch execute the the actions (functions)
            dispatch(addProductError(true))
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