import { v4 as uuid } from 'uuid'
import { AuthState } from '../types/store'
import { AuthActionTypes, LOADING_CUSTOMER, LOGOUT_CUSTOMER, SEND_CODE } from '../types/actions'
import { SET_AUTH_STAGE, LOGIN_CUSTOMER } from '../types/actions'

const initialState: AuthState = {
    isLoading: false,
    secureCode: uuid(),
    customerId: 0,
    authStage: 'not_auth',
    isAuth: false,
    token: null,
    customer: null
}

export default function AuthReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case LOADING_CUSTOMER:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_CUSTOMER:
            return {
                ...initialState,
                isLoading: false
            }
        case SEND_CODE: 
            return {
                ...state,
                customerId: action.customerId,
                authStage: 'check_sms',
                isLoading: false
            }
        case LOGIN_CUSTOMER:
            return {
                ...state,
                isAuth: true,
                authStage: 'loged_in',
                token: action.token,
                customer: action.customer,
                isLoading: false
            }
        case SET_AUTH_STAGE:
            return {
                ...state,
                authStage: action.stage,
                isLoading: false
            }
        default: 
            return state;
    }
}