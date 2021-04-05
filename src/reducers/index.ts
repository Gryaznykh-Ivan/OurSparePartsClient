import { combineReducers } from 'redux'

import categories from './categories'
import manufacturers from './manufacturers'
import pickupPoints from './pickupPoints'
import order from './order'
import orders from './orders'
import product from './product'
import products from './products'
import statuses from './statuses'

const rootReducer = combineReducers({ categories, manufacturers, order, orders, product, products, pickupPoints, statuses });

export default rootReducer;