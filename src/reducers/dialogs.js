import { combineReducers } from 'redux'
import {
	OPEN_ORDER_SAVE_DIALOG,
	CLOSE_ORDER_SAVE_DIALOG,
	OPEN_PRODUCTS_TO_ORDER_DIALOG,
	CLOSE_PRODUCTS_TO_ORDER_DIALOG } from '../actions/dialogs.js'

const isOrderSaveDialogOpen = (state = false, action) => {
	switch (action.type) {
		case OPEN_ORDER_SAVE_DIALOG:
			return true;
		case CLOSE_ORDER_SAVE_DIALOG:
			return false;
		default:
			return state
	}
}

const isProductsToOrderDialogOpen = (state = false, action) => {
	switch (action.type) {
		case OPEN_PRODUCTS_TO_ORDER_DIALOG:
			return true;
		case CLOSE_PRODUCTS_TO_ORDER_DIALOG:
			return false;
		default:
			return state
	}
}

const orderDialog = combineReducers({
  isOrderSaveDialogOpen,
  isProductsToOrderDialogOpen
});

export default orderDialog;