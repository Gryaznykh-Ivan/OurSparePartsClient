import { AppDispatch, AppThunk } from '../store'
import { Characteristic, MIProduct } from '../types/store';
import api from '../utils/api'
import {
    GET_PRODUCTS,
    LOAD_MORE_PRODUCTS,
    LOADING_PRODUCTS,
} from "../types/actions";

const getProducts = (limit: number, skip: number, query: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    const response = await api.get(`api/products/GetList${ query || '?' }&limit=${ limit }&skip=${ skip }`)

    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_PRODUCTS,
            loadMoreButton: result.data.length === limit,
            products: result.data
        });
    }
}

const loadMoreProducts = (limit: number, skip: number, query: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    const response = await api.get(`api/products/GetList${ query || '?' }&limit=${ limit }&skip=${ skip }`);

    const result = response.data;
    if (result.success) {
        dispatch({
            type: LOAD_MORE_PRODUCTS,
            loadMoreButton: result.data.length === limit,
            products: result.data
        });
    }
}

const getSimilarProducts = (id: number, limit: number, skip: Number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    const response = await api.get(`api/products/GetSimilarList/${ id }?limit=${ limit }&skip=${ skip }`)

    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_PRODUCTS,
            loadMoreButton: result.data.length === limit,
            products: result.data
        });
    }
}

const loadMoreSimilarProducts = (id: number, limit: number, skip: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PRODUCTS });

    const response = await api.get(`api/products/GetSimilarList/${ id }?limit=${ limit }&skip=${ skip }`)

    const result = response.data;
    if (result.success) {
        dispatch({
            type: LOAD_MORE_PRODUCTS,
            loadMoreButton: result.data.length === limit,
            products: result.data
        });
    }
}

export {
    getProducts,
    loadMoreProducts,
    getSimilarProducts,
    loadMoreSimilarProducts
}