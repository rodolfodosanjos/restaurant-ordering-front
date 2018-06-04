import { combineReducers } from 'redux'
import dialogs from './dialogs.js'
import orders from './orders.js'

export default combineReducers({
	dialogs,
	orders
});
