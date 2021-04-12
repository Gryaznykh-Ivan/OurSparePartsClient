
import store, { AppDispatch, AppThunk } from '../store'
import { CHANGE_QUANTITY_OF_ITEM_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../types/actions'
import { CartItem, CartState } from '../types/store';


const changeQuantityOfItem = (id: number, increment: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({
        type: CHANGE_QUANTITY_OF_ITEM_CART,
        productId: id,
        increment: increment
    });
}



const addToCart = (item: Omit<CartItem, "amount">): AppThunk => async (dispatch: AppDispatch) => {
    const isExist = store.getState().cart.items.find(x => x.productId === item.productId);
    if (isExist) {
        return dispatch({
            type: CHANGE_QUANTITY_OF_ITEM_CART,
            productId: item.productId,
            increment: 1
        });
    }

    dispatch({
        type: ADD_TO_CART,
        item: {
            ...item,
            amount: 1
        }
    });
}

const removeFromCart = (id: number): AppThunk => async (dispatch: AppDispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        productId: id
    });
}

export {
    changeQuantityOfItem, addToCart, removeFromCart
}