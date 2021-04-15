import api from '../utils/api'
import { History } from 'history';
import { AppDispatch, AppThunk } from '../store'
import { LOADING_ORDER, GET_ORDER, SET_CART } from '../types/actions'
import { CartItem } from '../types/store';

const getOrder = (id: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_ORDER });

    const response = await api.get(`api/orders/get/${ id }`);
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_ORDER,
            order: result.data
        });
    } else {
        dispatch({ type: LOADING_ORDER, isLoading: false });
    }
}

const createOrder = (history: History, pickupPointId: number, comment: string, cart: CartItem[]): AppThunk => async (dispatch: AppDispatch) => {
    const response = await api.post(`api/orders/create`, { pickupPointId, comment, cart });
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_ORDER,
            order: result.data
        });

        dispatch({ type: SET_CART, cart: { items: [] } });

        history.push('/order/' + result.orderId);
    }
}


export {
    getOrder, createOrder
}