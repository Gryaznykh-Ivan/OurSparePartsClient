import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CartState } from './types/store';

import store from './store'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// (() => {
//     const cartString = localStorage.getItem('cart');
//     if (cartString) {
//         const cart: CartState = JSON.parse(cartString);

//         if (Date.now() - cart.lastUpdate < 86400000) {
//             //store.dispatch({ type: 'SET_CART', cartString });
//         } else {
//             localStorage.removeItem('cart');
//         }
//     }
// })()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
