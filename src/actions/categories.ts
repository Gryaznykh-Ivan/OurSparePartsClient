import api from "../utils/api";
import { AppDispatch, AppThunk } from "../store";
import { GET_CATEGORIES, LOADING_CATEGORIES } from "../types/actions";

const getCategories = (): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CATEGORIES });
    const response = await api.get(`api/categories/getlist`);
    const result = response.data;
    if (result.success) {
        dispatch({
            type: GET_CATEGORIES,
            categories: result.data
        });
    }
}

export {
    getCategories
}