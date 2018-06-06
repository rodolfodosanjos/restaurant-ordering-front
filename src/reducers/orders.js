import {
	ORDERS_REQUEST,
	ORDERS_RECEIVE,
	REMOVE_ORDER_REQUEST,
	REMOVE_ORDER_RECEIVE,
	CREATE_ORDER_REQUEST,
	CREATE_ORDER_RECEIVE,
	UPDATE_ORDER_REQUEST,
	UPDATE_ORDER_RECEIVE,	
	ORDER_PRODUCT_REQUEST,
	ORDER_PRODUCT_RECEIVE,
	SELECT_ORDER_TO_EDIT,
	UNSELECT_ORDER_TO_EDIT
} from '../actions/orders';

const ordersInitialState = {
	isLoading: false,
	data: []
};

const orders = (state = ordersInitialState, action) => {
	switch (action.type) {
		case ORDERS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case ORDERS_RECEIVE:
			return {
				...state,
				isLoading: false,
				data: action.payload,
				lastUpdated: action.receivedAt
			};
		case REMOVE_ORDER_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case REMOVE_ORDER_RECEIVE:
			return {
				...state,
				isLoading: false,
				lastUpdated: action.receivedAt
			};
		case CREATE_ORDER_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case CREATE_ORDER_RECEIVE:
			return {
				...state,
				isLoading: false,
				lastUpdated: action.receivedAt
			};
		case UPDATE_ORDER_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case UPDATE_ORDER_RECEIVE:
			return {
				...state,
				isLoading: false,
				lastUpdated: action.receivedAt
			};
		case ORDER_PRODUCT_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case ORDER_PRODUCT_RECEIVE:
			return {
				...state,
				isLoading: false,
				lastUpdated: action.receivedAt
			};
		case SELECT_ORDER_TO_EDIT:
			return {
				...state,
				orderToEdit: action.orderToEdit
			};
		case UNSELECT_ORDER_TO_EDIT:
			return {
				...state,
				orderToEdit: undefined
			};
		default:
			return state
	}
};

export default orders;
