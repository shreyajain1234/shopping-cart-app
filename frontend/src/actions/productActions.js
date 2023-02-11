import axios from 'axios';
import { ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    CLEAR_ERROR,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
    
} from "../constants/productConstants";

export const getProducts = (currentPage=1)=> async (dispatch) =>{
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST,
        })
        //get product details from backend
        const { data } = await axios.get(`http://localhost:8080/api/products?page=${currentPage}`)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: "Error ocurred"
        })
    }
}

export const getProductDetails = (id)=> async (dispatch) =>{
    try {
        console.log(id);
        //dispatcher for request of product details
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        })
        //get product details of given id from backend
        const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
        //dispatcher for product details
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message
        })
    }
}

//Clear all errors
export const clearErrors = ()=> async (dispatch)=>{
    dispatch({
        type: CLEAR_ERROR
    })
}