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
    FETCH_PRODUCT_DELETE_ERROR,
    FETCH_PRODUCT_EDIT,
    FETCH_PRODUCT_EDIT_SUCCESS,
    FETCH_PRODUCT_EDIT_ERROR,
    START_PRODUCT_EDITION

} from '../types/indexTypes'
// import axios
import clientAxios from '../../config/axios';
// import sweet alert
import Swal from 'sweetalert2';
//import Products from '../Products';



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
            try {
                // const result = await clientAxios.delete(`/productos/${id}`)
                // console.log(result)
                await clientAxios.delete(`/productos/${id}`)
                dispatch(deleteProductSuccess());
                    // if you deleted show alert
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                        )
            }catch(error){
                    dispatch(deleteProductError())
                    console.log(error)
                }
        }
    }

    const fetchProductDelete = id => ({
        type:FETCH_PRODUCT_DELETE,
        payload:id
    })

    const deleteProductSuccess = () => ({
        type:FETCH_PRODUCT_DELETE_SUCCESS,
        
    })

    const deleteProductError = () => ({
        type:FETCH_PRODUCT_DELETE_ERROR,
        payload:true
    })


    ///  EDIT COMPONENT TO USE
    //PUTTING THE PRODUCT ON EDITION

    export function fetchProductEdit(product){
        return(dispatch) => {
            dispatch(fetchProductAction(product))
        }
    }

    const fetchProductAction = product => ({
        type:FETCH_PRODUCT_EDIT,
        payload:product
    })

    // the new product to make 

    export function editProductAction(product){
        return async (dispatch) => {
            dispatch(editProduct(product));
            try {
                // const result = await clientAxios.put(`/productos/${product.id}`, product)
                // console.log(result)
                await clientAxios.put(`/productos/${product.id}`, product)
                dispatch(editProductSuccess(product))
            } catch (error) {
                console.log(error)
                dispatch(editProductError())
            }
        }
    }

    const editProduct = (product) => ({
        type:START_PRODUCT_EDITION,
        //payload:product
    })

    const editProductSuccess = product => ({
        type:FETCH_PRODUCT_EDIT_SUCCESS,
        payload:product
    })

    const editProductError = () => ({
        type:FETCH_PRODUCT_EDIT_ERROR,
        payload:true
    }) 