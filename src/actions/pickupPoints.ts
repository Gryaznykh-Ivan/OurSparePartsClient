import { AppDispatch, AppThunk } from '../store'
import api from '../utils/api'
import {
    CHOOSE_PICKUP_POINTS,
    GET_PICKUP_POINTS,
    LOADING_PICKUP_POINTS
} from "../types/actions";
import { PickupPoint } from '../types/store';

const getPickupPoints = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_PICKUP_POINTS });

    const response = await api.get("api/PickupPoints/GetList")

    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_PICKUP_POINTS,
            pickupPoints: result.data
        });
    }
}

const choosePickupPoint = (pickupPoint: PickupPoint): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: CHOOSE_PICKUP_POINTS, chosenPickupPoint: pickupPoint });
}

export {
    getPickupPoints, choosePickupPoint
}