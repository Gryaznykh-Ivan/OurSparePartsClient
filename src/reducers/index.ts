import { combineReducers } from 'redux'

import categories from './categories'
import manufacturers from './manufacturers'
import pickupPoints from './pickupPoints'
import order from './order'
import orders from './orders'
import product from './product'
import products from './products'
import statuses from './statuses'
import lastAction from './lastAction'
import cart from './cart'
import auth from './auth'

const rootReducer = combineReducers({ categories, manufacturers, order, orders, product, products, pickupPoints, statuses, lastAction, cart, auth });

export default rootReducer;