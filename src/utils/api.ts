import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify';
import store, { AppState } from '../store'

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:5000/' // 'https://xn--b1afb6bcb.xn--73-6kca7ai1crj1c.xn--p1ai/'
}

const api = axios.create(config);

api.interceptors.request.use(
    req => {
        if (store.getState().auth.isAuth === true) {
            req.headers.Authorization = `Bearer ${ store.getState().auth.token }`;
        }

        return req;
    },
    err => err
);

api.interceptors.response.use(
    res => res,
    err => {
        const response = err.response;

        if (!response) return Promise.reject(err);

        if (response.status === 401) {
            localStorage.removeItem('token');
            store.dispatch({type: 'LOGOUT_CUSTOMER'});
        }

        return err.response;
    }
);

export default api;