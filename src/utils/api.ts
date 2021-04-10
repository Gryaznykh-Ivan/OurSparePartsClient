import axios, { AxiosRequestConfig } from 'axios'
import store, { AppState } from '../store'

const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:5000/' // 'https://xn--b1afb6bcb.xn--73-6kca7ai1crj1c.xn--p1ai/'
}

const api = axios.create(config);

api.interceptors.request.use(
    req => req,
    err => err
);

api.interceptors.response.use(
    res => res,
    err => {
        if (err.response) return err.response;
        return Promise.reject(err);
    }
);

export default api;