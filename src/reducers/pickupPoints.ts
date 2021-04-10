import { PickupPointsActionTypes } from '../types/actions'
import { PickupPointsState } from '../types/store'
import { LOADING_PICKUP_POINTS, GET_PICKUP_POINTS, CHOOSE_PICKUP_POINTS } from '../types/actions'

const initialState: PickupPointsState = {
    isLoading: false,
    data: [],
    chosenPickupPoint: null
}

export default function PickupPointsReducer(state = initialState, action: PickupPointsActionTypes): PickupPointsState {
    switch (action.type) {
        case LOADING_PICKUP_POINTS:
            return {
                ...state,
                isLoading: true
            }
        case GET_PICKUP_POINTS:
            return {
                ...state,
                isLoading: false,
                data: action.pickupPoints
            }
        case CHOOSE_PICKUP_POINTS:
            return {
                ...state,
                chosenPickupPoint: action.chosenPickupPoint
            }
        default:
            return state;
    }
}

