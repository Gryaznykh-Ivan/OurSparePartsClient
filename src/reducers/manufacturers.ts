import { ManufacturersActionTypes } from '../types/actions'
import { ManufacturerState } from '../types/store'
import { LOADING_MANUFACTURERS, GET_MANUFACTURERS } from '../types/actions'

const initialState: ManufacturerState = {
    isLoading: false,
    data: []
}

export default function ManufacturersReducer(state = initialState, action: ManufacturersActionTypes): ManufacturerState {
    switch (action.type) {
        case LOADING_MANUFACTURERS:
            return {
                ...state,
                isLoading: true
            }
        case GET_MANUFACTURERS:
            return {
                isLoading: false,
                data: action.manufacturers
            }
        default:
            return state;
    }
}

