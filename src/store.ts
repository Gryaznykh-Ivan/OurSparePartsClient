import { createStore, applyMiddleware, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkAction } from 'redux-thunk'

import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>