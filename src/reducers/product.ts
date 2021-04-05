import { ProductActionType } from "../types/actions";
import { ProductState } from "../types/store";
import {
    LOADING_PRODUCT,
    GET_PRODUCT,
} from "../types/actions";

const initialState: ProductState = {
    isLoading: false,
    data: null
}

export default function ProductReducer(state = initialState, action: ProductActionType): ProductState {
    switch (action.type) {
        case LOADING_PRODUCT:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCT:
            return {
                isLoading: false,
                data: action.product
            }
        default:
            return state;
    }
}