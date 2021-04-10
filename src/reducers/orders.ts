import { LOADING_ORDERS, GET_ORDERS, LOAD_MORE_ORDERS } from '../types/actions'
import { OrdersActionTypes } from "../types/actions";
import { OrdersState } from "../types/store";

const initialState: OrdersState = {
    isLoading: false,
    loadMoreButton: false,
    orders: []
}

export default function OrdersReducer(state = initialState, action: OrdersActionTypes): OrdersState {
    switch (action.type) {
        case LOADING_ORDERS:
            return {
                ...state,
                isLoading: true,
                orders: []
            }
        case GET_ORDERS:
            return {
                ...state,
                loadMoreButton: action.loadMoreButton,
                isLoading: false,
                orders: [
                    ...action.orders
                ]
            }
        case LOAD_MORE_ORDERS:
            return {
                ...state,
                loadMoreButton: action.loadMoreButton,
                isLoading: false,
                orders: [
                    ...state.orders,
                    ...action.orders
                ]
            }
        default:
            return state;
    }
}