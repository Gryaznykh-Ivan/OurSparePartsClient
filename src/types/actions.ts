import { UserInfo } from "node:os";
import { CartItem, CartState, Category, Customer, FIOrder, FIProduct, Manufacturer, MIOrder, MIProduct, PickupPoint } from "./store";

export const LOADER_LOADING = 'LOADER_LOADING'

export const LOADING_CATEGORIES = 'LOADING_CATEGORIES'
export const GET_CATEGORIES = 'GET_CATEGORIES'

export const GET_MANUFACTURERS = 'GET_MANUFACTURERS'
export const LOADING_MANUFACTURERS = 'LOADING_MANUFACTURERS'

export const LOADING_PRODUCTS = 'LOADING_PRODUCTS'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const LOAD_MORE_PRODUCTS = 'LOAD_MORE_PRODUCTS'

export const LOADING_PRODUCT = 'LOADING_PRODUCT'
export const GET_PRODUCT = 'GET_PRODUCT'

export const LOADING_ORDERS = 'LOADING_ORDERS'
export const GET_ORDERS = 'GET_ORDERS'
export const LOAD_MORE_ORDERS = 'LOAD_MORE_ORDERS'

export const LOADING_ORDER = 'LOADING_ORDER'
export const GET_ORDER = 'GET_ORDER'

export const LOADING_PICKUP_POINTS = 'LOADING_PICKUP_POINTS'
export const GET_PICKUP_POINTS = 'GET_PICKUP_POINTS'
export const CHOOSE_PICKUP_POINTS = 'CHOOSE_PICKUP_POINTS'

export const SET_CART = 'SET_CART'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CHANGE_QUANTITY_OF_ITEM_CART = 'CHANGE_QUANTITY_OF_ITEM_CART'

export const LOADING_CUSTOMER = 'LOADING_CUSTOMER'
export const LOGIN_CUSTOMER = 'LOGIN_CUSTOMER'
export const LOGOUT_CUSTOMER = 'LOGOUT_CUSTOMER'
export const SEND_CODE = 'SEND_CODE'
export const SET_AUTH_STAGE = 'SET_AUTH_STAGE'

interface LoaderLoadingAction {
    type: typeof LOADER_LOADING,
    isLoading: boolean
}

interface LoadingManufacturersAction {
    type: typeof LOADING_MANUFACTURERS
}

interface GetManufacturersAction {
    type: typeof GET_MANUFACTURERS,
    manufacturers: Manufacturer[]
}

interface LoadingPickupPointsAction {
    type: typeof LOADING_PICKUP_POINTS
}

interface GetPickupPointsAction {
    type: typeof GET_PICKUP_POINTS,
    pickupPoints: PickupPoint[]
}

interface ChoosePickupPointAction {
    type: typeof CHOOSE_PICKUP_POINTS,
    chosenPickupPoint: PickupPoint
}



interface LoadingCategoriesAction {
    type: typeof LOADING_CATEGORIES
}

interface GetCategoriesAction {
    type: typeof GET_CATEGORIES,
    categories: Category[]
}


interface LoadingProductsAction {
    type: typeof LOADING_PRODUCTS,
    isLoading?: boolean 
}

interface GetProductsAction {
    type: typeof GET_PRODUCTS,
    loadMoreButton: boolean,
    products: MIProduct[]
}

interface LoadMoreProductsAction {
    type: typeof LOAD_MORE_PRODUCTS,
    loadMoreButton: boolean,
    products: MIProduct[]
}

interface LoadingProductAction {
    type: typeof LOADING_PRODUCT,
    isLoading?: boolean
}

interface GetProductAction {
    type: typeof GET_PRODUCT,
    product: FIProduct | null
}


interface LoadingOrdersAction {
    type: typeof LOADING_ORDERS,
    isLoading?: boolean
}

interface LoadingOrderAction {
    type: typeof LOADING_ORDER,
    isLoading?: boolean
}


interface GetOrderAction {
    type: typeof GET_ORDER,
    order: FIOrder
}


interface GetOrdersAction {
    type: typeof GET_ORDERS,
    loadMoreButton: boolean,
    orders: MIOrder[]
}

interface LoadMoreOrdersAction {
    type: typeof LOAD_MORE_ORDERS,
    loadMoreButton: boolean,
    orders: MIOrder[]
}

interface ChangeQuantityOfItemCartAction {
    type: typeof CHANGE_QUANTITY_OF_ITEM_CART,
    productId: number,
    increment: number
}

interface AddToCartAction {
    type: typeof ADD_TO_CART,
    item: CartItem
}

interface SetCartAction {
    type: typeof SET_CART,
    cart: CartState
}

interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART,
    productId: number
}

interface SendCodeAction {
    type: typeof SEND_CODE,
    customerId: number
}

interface SetAuthStageAction {
    type: typeof SET_AUTH_STAGE,
    stage: string
}

interface LoginCustomerAction {
    type: typeof LOGIN_CUSTOMER,
    token: string,
    customer: Customer
}

interface LogoutCustomerAction {
    type: typeof LOGOUT_CUSTOMER
}

interface LoadingCustomerAction {
    type: typeof LOADING_CUSTOMER
}

export type LoaderActionType = LoaderLoadingAction;
export type ManufacturersActionTypes = LoadingManufacturersAction | GetManufacturersAction;
export type CategoriesActionTypes = LoadingCategoriesAction | GetCategoriesAction;
export type ProductActionTypes = LoadingProductAction | GetProductAction;
export type ProductsActionTypes = LoadingProductsAction | GetProductsAction | LoadMoreProductsAction;
export type OrderActionTypes = LoadingOrderAction | GetOrderAction;
export type OrdersActionTypes = LoadingOrdersAction | GetOrdersAction | LoadMoreOrdersAction;
export type PickupPointsActionTypes = LoadingPickupPointsAction | GetPickupPointsAction | ChoosePickupPointAction;
export type CartActionTypes = SetCartAction | ChangeQuantityOfItemCartAction | AddToCartAction | RemoveFromCartAction;
export type AuthActionTypes = LoadingCustomerAction | SetAuthStageAction | SendCodeAction | LoginCustomerAction | LogoutCustomerAction;