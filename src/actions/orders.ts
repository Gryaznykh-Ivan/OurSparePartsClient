import api from '../utils/api'
import { AppDispatch, AppThunk } from '../store'
import { LOADING_ORDERS, GET_ORDERS, LOAD_MORE_ORDERS } from '../types/actions'

const getOrders = (telephone: string, limit: number, skip: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_ORDERS });

    const response = await api.get(`api/orders/GetList?telephone=${ telephone }&limit=${ limit }&skip=${ skip }`);
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_ORDERS,
            loadMoreButton: result.data.length === limit,
            orders: result.data
        });
    } else {
        dispatch({
            type: GET_ORDERS,
            loadMoreButton: false,
            orders: []
        });
    }
}

const loadMoreOrders = (telephone: string, limit: number, skip: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_ORDERS });
    const response = await api.get(`api/orders/GetList?telephone=${ telephone }&limit=${ limit }&skip=${ skip }`);
    const result = response.data;
    if (result.success) {
        dispatch({
            type: LOAD_MORE_ORDERS,
            loadMoreButton: result.data.length === limit,
            orders: result.data
        });
    } else {
        dispatch({ type: LOADING_ORDERS, isLoading: false });
    }
}

export {
    getOrders, loadMoreOrders
}