import { CategoriesActionType } from '../types/actions'
import { CategoryState } from "../types/store";
import {
    LOADING_CATEGORIES,
    GET_CATEGORIES
} from '../types/actions'

const initialState: CategoryState = {
    isLoading: false,
    data: []
}

export default function CategoriesReducer(state = initialState, action: CategoriesActionType): CategoryState {
    switch (action.type) {
        case LOADING_CATEGORIES:
            return {
                ...state,
                isLoading: true
            }
        case GET_CATEGORIES:
            return {
                isLoading: false,
                data: [
                    ...state.data,
                    ...action.categories
                ]
            }
        default:
            return state;
    }
}