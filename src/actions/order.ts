import api from '../utils/api'
import { AppDispatch, AppThunk } from '../store'
import { LOADING_ORDER, GET_ORDER } from '../types/actions'

const getOrder = (id: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_ORDER });

    const response = await api.get(`api/orders/get/${ id }`);
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_ORDER,
            order: result.data
        });
    }
}


export {
    getOrder
}