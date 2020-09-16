// we need to import the types from indexTypes

import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    LIST_ALL_PRODUCTS,
    LIST_ALL_PRODUCTS_SUCCESS,
    LIST_ALL_PRODUCTS_ERROR,
    FETCH_PRODUCT_DELETE,
    FETCH_PRODUCT_DELETE_SUCCESS,
    FETCH_PRODUCT_DELETE_ERROR,
    FETCH_PRODUCT_EDIT,
    FETCH_PRODUCT_EDIT_SUCCESS,
    FETCH_PRODUCT_EDIT_ERROR


} from '../types/indexTypes'

// cada reducer tiene su propio state

const initialState = {
    products : [],
    error:false,
    loading:false,
    deleteProduct:null,
    productedit:null
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
            case FETCH_PRODUCT_DELETE_ERROR:
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

                    case FETCH_PRODUCT_DELETE:
                        return{
                            ...state,
                            deleteProduct:action.payload
                        }
                    case FETCH_PRODUCT_DELETE_SUCCESS:
                        return{
                            ...state,
                            //to bring the the other products except the product that we deleted
                            //and to show in the state fasted
                            products:state.products.filter(product => product.id !== 
                                state.deleteProduct ) ,
                                //we have to return to null 
                                deleteProduct:null
                        }   
                    case FETCH_PRODUCT_EDIT:
                        return{
                            ...state,
                            productedit: action.payload
                        }
        default:
            return state;
    }
}