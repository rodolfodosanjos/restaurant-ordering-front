import { combineReducers } from 'redux'
import {
	OPEN_ORDER_SAVE_DIALOG,
	CLOSE_ORDER_SAVE_DIALOG,
	OPEN_PRODUCTS_TO_ORDER_DIALOG,
	CLOSE_PRODUCTS_TO_ORDER_DIALOG } from '../actions/dialogs.js'

const orderSaveDialogInitialState = {
	isOpen: false
};

const orderSaveDialog = (state = orderSaveDialogInitialState, action) => {
	switch (action.type) {
		case OPEN_ORDER_SAVE_DIALOG:
			return {
				isOpen: true
			};
		case CLOSE_ORDER_SAVE_DIALOG:
			return {
				isOpen: false
			};
		default:
			return state;
	}
};

const productsToOrderDialogInitialState = {
	isOpen: false
};

const productsToOrderDialog = (state = productsToOrderDialogInitialState, action) => {
	switch (action.type) {
		case OPEN_PRODUCTS_TO_ORDER_DIALOG:
			return {
				isOpen: true
			};
		case CLOSE_PRODUCTS_TO_ORDER_DIALOG:
			return {				
				isOpen: false
			}
		default:
			return state;
	}
};

const dialogs = combineReducers({
	orderSaveDialog,
	productsToOrderDialog
});

export default dialogs;