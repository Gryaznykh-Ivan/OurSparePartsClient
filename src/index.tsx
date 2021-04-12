import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from "jwt-decode";
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CartState, Customer, JwtPayload } from './types/store';

import store from './store'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LOGIN_CUSTOMER, SET_CART } from './types/actions';

(() => {
    const cartString = localStorage.getItem('cart');
    const token = localStorage.getItem('token');
    if (cartString) {
        const cart: CartState = JSON.parse(cartString);

        if (Date.now() - cart.lastUpdate < 86400000) {
            store.dispatch({ type: SET_CART, cart });
        } else {
            localStorage.removeItem('cart');
        }
    }

    if (token) {
        const decoded: JwtPayload = jwt_decode(token);

        if (decoded.exp - Date.now() < 86400) {
            store.dispatch({
                type: LOGIN_CUSTOMER,
                token: token,
                customer: {
                    customerId: decoded.CustomerId,
                    lastname: decoded.Lastname,
                    forename: decoded.Forename,
                    telephone: decoded.Telephone
                }
            });
        } else {
            localStorage.removeItem('token');
        }
    }
})()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
