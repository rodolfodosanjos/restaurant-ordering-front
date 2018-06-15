import {
	PRODUCTS_REQUEST,
	PRODUCTS_RECEIVE
} from '../actions/products';

const productsInitialState = {
	isLoading: false,
	data: [],
	selectedOrder: undefined
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
		default:
			return state
	}
};

export default products;
