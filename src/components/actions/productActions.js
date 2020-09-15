// this is the functions to modify the state

// we have to map all the types
import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR

} from '../types/indexTypes'

/// Create new production

export function createNewProductAction (product){
    return () => {
        console.log('desde action')
        console.log(product)
    }
}