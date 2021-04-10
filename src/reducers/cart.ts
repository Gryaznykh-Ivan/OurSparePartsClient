import { CartActionTypes } from '../types/actions'
import { CartItem, CartState } from "../types/store";
import {
    SET_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CHANGE_QUANTITY_OF_ITEM_CART
} from '../types/actions'

const initialState: CartState = {
    lastUpdate: -1,
    items: []
}

export default function CartReducer(state = initialState, action: CartActionTypes): CartState {
    switch (action.type) {
        case CHANGE_QUANTITY_OF_ITEM_CART:
            return {
                ...state,
                lastUpdate: Date.now(),
                items: state.items.reduce((accumulator: CartItem[], item: CartItem) => {
                    if (item.productId !== action.productId) {
                        accumulator.push(item);
                    } else {
                        if (item.amount + action.increment <= 0) return accumulator;

                        accumulator.push({
                            ...item,
                            amount: item.amount + action.increment
                        });
                    }

                    return accumulator;
                }, [])
            }
        case ADD_TO_CART:
            return {
                ...state,
                lastUpdate: Date.now(),
                items: [
                    ...state.items,
                    action.item
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                lastUpdate: Date.now(),
                items: state.items.filter((item) => item.productId != action.productId)
            }
        default:
            return state;
    }
}

// export default function (state: CartState, action: CartActionTypes): CartState {
//     const newState = CartReducer(state, action);

//     // if (([ADD_TO_CART, REMOVE_FROM_CART, CHANGE_QUANTITY_OF_ITEM_CART]).includes(action.type)){
//     //     localStorage.setItem('cart', JSON.stringify(newState));
//     // }
    
//     return newState;
// }