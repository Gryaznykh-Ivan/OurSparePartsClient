import { LOADING_ORDER, GET_ORDER } from '../types/actions'
import { OrderActionTypes } from "../types/actions"
import { OrderState } from "../types/store"

const initialState: OrderState = {
    isLoading: false,
    order: null
}

export default function OrderReducer(state = initialState, action: OrderActionTypes): OrderState {
    switch (action.type) {
        case LOADING_ORDER:
            return {
                ...state,
                isLoading: true
            }
        case GET_ORDER:
            return {
                ...state,
                isLoading: false,
                order: action.order
            }
        default:
            return state;
    }
}