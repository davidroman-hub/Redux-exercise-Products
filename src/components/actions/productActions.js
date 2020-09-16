// this is the functions to modify the state

// we have to map all the types
import {
    
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    LIST_ALL_PRODUCTS,
    LIST_ALL_PRODUCTS_SUCCESS,
    LIST_ALL_PRODUCTS_ERROR,
    FETCH_PRODUCT_DELETE,
    FETCH_PRODUCT_DELETE_SUCCESS,
    FETCH_PRODUCT_DELETE_ERROR

} from '../types/indexTypes'
// import axios
import clientAxios from '../../config/axios';
// import sweet alert
import Swal from 'sweetalert2';
import Products from '../Products';



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


///// fUNCTION SHOW ALL PRODUCTS

export function listAllProductsAction() {
    return async (dispatch) => {
        dispatch(listAllProducts());
        try{
            // setTimeout(async () => {
            //     const response = await clientAxios.get('/productos');
            //     dispatch(listProductsSuccess(response.data))
            //     // console.log(response.data)
            // },1000)
            const response = await clientAxios.get('/productos');
            dispatch(listProductsSuccess(response.data))
            // console.log(response.data)
        }catch(error){
            // console.log(error);
            dispatch(listAllProductsError())
        }
    }
}

const listAllProducts = () => ({
    type: LIST_ALL_PRODUCTS,
    payload:true
})

const listProductsSuccess = products => ({
    type:LIST_ALL_PRODUCTS_SUCCESS,
    payload:products
})

const listAllProductsError = () => ({
    type:LIST_ALL_PRODUCTS_ERROR,
    // if was created with node , you can use the error here 
    payload:true
})

//SELECT AND DELETE PRODUCT 

    export function deleteProductAction(id){
        return async (dispatch) => {
            dispatch(fetchProductDelete(id));
            //console.log(id)
        }
    }

    const fetchProductDelete = id => ({
        type:FETCH_PRODUCT_DELETE,
        payload:id
    })