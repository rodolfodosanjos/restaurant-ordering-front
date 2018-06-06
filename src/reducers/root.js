import { combineReducers } from 'redux'
import dialogs from './dialogs.js'
import orders from './orders.js'
import products from './products.js'

export default combineReducers({
	dialogs,
	orders,
	products
});
