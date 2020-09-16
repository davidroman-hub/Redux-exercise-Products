// we need to import the types from indexTypes

import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    LIST_ALL_PRODUCTS,
    LIST_ALL_PRODUCTS_SUCCESS,
    LIST_ALL_PRODUCTS_ERROR

} from '../types/indexTypes'

// cada reducer tiene su propio state

const initialState = {
    products : [],
    error:false,
    loading:false
}

export default function( state = initialState , action){
    switch(action.type) {
        case ADD_PRODUCT:
        case  LIST_ALL_PRODUCTS:
            return{
                ...state,
                loading:action.payload
            }

            case ADD_PRODUCT_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    products:[...state.products, action.payload]

                }
            case ADD_PRODUCT_ERROR:
            case LIST_ALL_PRODUCTS_ERROR:    
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                case  LIST_ALL_PRODUCTS_SUCCESS:
                    return{
                        ...state,
                        loading: false,
                        //error:false,
                        error:null,
                        products:action.payload
                    }
        default:
            return state;
    }
}