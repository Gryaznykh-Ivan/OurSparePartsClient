// MI - minimal information
// FI - full information

export interface Manufacturer {
    manufacturerId: number,
    title: string,
    country: string
}

export interface Category {
    categoryId: number,
    title: string,
    imageId: number | null,
    imageUrl: string
}

export interface Customer {
    customerId: number,
    forename: string,
    lastname: string,
    telephone: string,
    createdAt: string,
    confirmed: boolean
}

export interface PickupPoint {
    pickupPointId: number,
    address: string,
    operationMode: string,
    imageUrl: string
}

export interface CartItem {
    productId: number,
    title: string,
    amount: number,
    price: number
}

export interface MIOrder {
    orderId: number,
    address: string,
    totalPrice: number,
    status: string,
    statusId: number,
    updatedAt: string
}

export interface FIOrder {
    orderId: number,
    comment: string,
    totalPrice: number,
    createdAt: string,
    statusId: number,
    status: string,
    customer: Customer,
    pickupPoint: PickupPoint,
    cart: CartItem[]
}

export interface Characteristic {
    characteristicId: number,
    productId: number,
    name: string,
    value: string
}

export interface MIProduct {
    productId: number,
    title: string,
    price: number,
    imageUrl: string
    categoryId: number,
    manufacturerId: number
}

export interface FIProduct {
    productId: number,
    title: string,
    description: string,
    price: number,
    imageUrl: string,
    categoryId: number,
    manufacturer: Manufacturer,
    characteristics: Characteristic[]
}

export interface Status {
    statusId: number,
    title: string
}

//states

export interface LoaderState {
    isLoading: boolean
}

export interface PickupPointsState {
    isLoading: boolean,
    data: PickupPoint[],
    chosenPickupPoint: PickupPoint | null
}

export interface ManufacturerState {
    isLoading: boolean,
    data: Manufacturer[]
}

export interface SecureState {
    secureCode: string
}

export interface ProductsState {
    isLoading: boolean,
    loadMoreButton: boolean,
    data: MIProduct[]
}

export interface ProductState {
    isLoading: boolean,
    data: FIProduct | null
}

export interface CategoryState {
    isLoading: boolean,
    data: Category[]
}

export interface StatusState {
    data: Status[]
}

export interface OrderState {
    isLoading: boolean,
    order: FIOrder | null
}

export interface OrdersState {
    isLoading: boolean,
    loadMoreButton: boolean,
    orders: MIOrder[]
}


export interface CartState {
    lastUpdate: number,
    items: CartItem[]
}