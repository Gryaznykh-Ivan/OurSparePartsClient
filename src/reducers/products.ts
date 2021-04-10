import { ProductsActionTypes } from "../types/actions";
import { ProductsState } from "../types/store";
import {
    GET_PRODUCTS,
    LOAD_MORE_PRODUCTS,
    LOADING_PRODUCTS,
} from "../types/actions";

const initialState: ProductsState = {
    isLoading: false,
    loadMoreButton: false,
    data: []
}

export default function ProductsReducer(state = initialState, action: ProductsActionTypes): ProductsState {
    switch (action.type) {
        case LOADING_PRODUCTS:
            return {
                ...state,
                isLoading: true
            }
        case GET_PRODUCTS:
            return {
                isLoading: false,
                loadMoreButton: action.loadMoreButton,
                data: [
                    ...action.products
                ]
            }
        case LOAD_MORE_PRODUCTS:
            return {
                isLoading: false,
                loadMoreButton: action.loadMoreButton,
                data: [
                    ...state.data,
                    ...action.products
                ]
            }
        default:
            return state;
    }
}