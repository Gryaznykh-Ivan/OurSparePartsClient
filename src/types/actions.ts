import { Category, FIOrder, FIProduct, Manufacturer, MIOrder, MIProduct, PickupPoint } from "./store";

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
    type: typeof LOADING_PRODUCTS
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
    type: typeof LOADING_PRODUCT
}

interface GetProductAction {
    type: typeof GET_PRODUCT,
    product: FIProduct | null
}


interface LoadingOrdersAction {
    type: typeof LOADING_ORDERS
}

interface LoadingOrderAction {
    type: typeof LOADING_ORDER
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


export type LoaderActionType = LoaderLoadingAction;
export type ManufacturersActionTypes = LoadingManufacturersAction | GetManufacturersAction;
export type CategoriesActionType = LoadingCategoriesAction | GetCategoriesAction;
export type ProductActionType = LoadingProductAction | GetProductAction;
export type ProductsActionType = LoadingProductsAction | GetProductsAction | LoadMoreProductsAction;
export type OrderActionType = LoadingOrderAction | GetOrderAction;
export type OrdersActionType = LoadingOrdersAction | GetOrdersAction | LoadMoreOrdersAction;
export type PickupPointsActionType = LoadingPickupPointsAction | GetPickupPointsAction | ChoosePickupPointAction;