import {
	ORDERS_REQUEST,
	ORDERS_RECEIVE,
	REMOVE_ORDER_REQUEST,
	REMOVE_ORDER_RECEIVE,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_RECEIVE,
	ORDER_PRODUCT_REQUEST,
	ORDER_PRODUCT_RECEIVE
} from '../actions/orders';

const ordersInitialState = {
	isLoading: false,
	data: []
};

const orders = (state = ordersInitialState, action) => {
	switch (action.type) {
		case ORDERS_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			});
		case ORDERS_RECEIVE:
			return Object.assign({}, state, {
				isLoading: false,
				data: action.payload,
				lastUpdated: action.receivedAt
			});
		case REMOVE_ORDER_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			});
		case REMOVE_ORDER_RECEIVE:
			return Object.assign({}, state, {
				isLoading: false,
				lastUpdated: action.receivedAt
			});
		case CREATE_ORDER_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			});
		case CREATE_ORDER_RECEIVE:
			return Object.assign({}, state, {
				isLoading: false,
				lastUpdated: action.receivedAt
			});
		case ORDER_PRODUCT_REQUEST:
			return Object.assign({}, state, {
				isLoading: true,
			});
		case ORDER_PRODUCT_RECEIVE:
			return Object.assign({}, state, {
				isLoading: false,
				lastUpdated: action.receivedAt
			});
		default:
			return state
	}
};

export default orders;
