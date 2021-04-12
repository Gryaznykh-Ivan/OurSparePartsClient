import { createStore, applyMiddleware, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk'

import rootReducer from './reducers'
import {
    ADD_TO_CART,
    CHANGE_QUANTITY_OF_ITEM_CART,
    REMOVE_FROM_CART
} from './types/actions';

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(() => {
    if (([ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_OF_ITEM_CART]).includes(store.getState().lastAction)){
        localStorage.setItem('cart', JSON.stringify(store.getState().cart));
    }
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>