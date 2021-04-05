import { AppDispatch, AppThunk } from '../store'
import { Characteristic, MIProduct } from '../types/store';
import api from '../utils/api'
import {
    GET_PRODUCT,
    LOADING_PRODUCT,
} from "../types/actions";


const getProduct = (id: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PRODUCT });

    const response = await api.get(`api/products/Get/${ id }`)
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_PRODUCT,
            product: result.data
        });
    }
}

export {
    getProduct
}