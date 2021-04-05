import api from '../utils/api'
import { AppDispatch, AppThunk } from '../store'
import {
    LOADING_MANUFACTURERS,
    GET_MANUFACTURERS
} from '../types/actions'

const getManufacturers = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_MANUFACTURERS });

    const response = await api.get('api/manufacturers/getlist');

    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_MANUFACTURERS,
            manufacturers: result.data
        });
    }
}

export {
    getManufacturers
}