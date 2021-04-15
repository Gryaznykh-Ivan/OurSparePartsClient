import store, { AppDispatch, AppThunk } from '../store'
import sha256 from 'crypto-js/sha256';
import { Characteristic, Customer, MIProduct } from '../types/store';
import api from '../utils/api'
import {
    SET_AUTH_STAGE,
    LOGIN_CUSTOMER,
    SEND_CODE,
    LOGOUT_CUSTOMER,
    LOADING_CUSTOMER,
} from "../types/actions";
import { toast } from 'react-toastify';

const sendCode = (telephone: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CUSTOMER })

    const SecureCode = store.getState().auth.secureCode;
    const response = await api.post(`api/Confirmations/CreateByTelephone`, { telephone }, { headers: { SecureCode } })
    const result = response.data;
    if (result.success) {
        dispatch({
            type: SEND_CODE,
            customerId: result.customerId
        });
    } else {
        dispatch({
            type: SET_AUTH_STAGE,
            stage: 'register'
        });
    }
}

const verifyCode = (customerId: number, code: string): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CUSTOMER })

    const SecureCode = store.getState().auth.secureCode;
    const response = await api.post(`api/Confirmations/AccountVerification`, { CustomerId: customerId, verificationCode: sha256(`${code}:${SecureCode}`).toString() });
    const result = response.data;
    if (result.success) {
        localStorage.setItem('token', result.token);

        dispatch({
            type: LOGIN_CUSTOMER,
            token: result.token,
            customer: result.data
        });
    } else {
        toast.error(result.error);

        dispatch({
            type: SET_AUTH_STAGE,
            stage: 'check_sms'
        });
    }
}

const createCustomer = (customer: Omit<Customer, "customerId">): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({ type: LOADING_CUSTOMER })

    const response = await api.post(`api/Customers/Create`, customer)
    const result = response.data;
    if (result.success) {
        const SecureCode = store.getState().auth.secureCode;

        await api.post(`api/Confirmations/CreateById`, { CustomerId: result.data.customerId }, { headers: { SecureCode } })

        dispatch({
            type: SEND_CODE,
            customerId: result.data.customerId
        });
    }
}

const logoutCustomer = (): AppThunk => (dispatch: AppDispatch) => {
    localStorage.removeItem('token');
    dispatch({
        type: LOGOUT_CUSTOMER
    });
}

export {
    sendCode, verifyCode, createCustomer, logoutCustomer
}