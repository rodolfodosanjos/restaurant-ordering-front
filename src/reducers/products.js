import {
	PRODUCTS_REQUEST,
	PRODUCTS_RECEIVE,
	SELECT_ORDER_TO_ADD_PRODUCTS,
	UNSELECT_ORDER_TO_ADD_PRODUCTS
} from '../actions/products';

const productsInitialState = {
	isLoading: false,
	data: [],
	orderToAddProducts: undefined
};

const products = (state = productsInitialState, action) => {
	switch (action.type) {
		case PRODUCTS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case PRODUCTS_RECEIVE:
			return {
				...state,
				isLoading: false,
				data: action.payload,
				lastUpdated: action.receivedAt
			};
		case SELECT_ORDER_TO_ADD_PRODUCTS:
			return {
				...state,
				orderToAddProducts: action.orderToAddProducts
			};
		case UNSELECT_ORDER_TO_ADD_PRODUCTS:
			return {
				...state,
				orderToAddProducts: undefined
			};
		default:
			return state
	}
};

export default products;
