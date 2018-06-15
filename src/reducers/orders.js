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
	REMOVE_PRODUCT_FROM_ORDER_REQUEST,
	REMOVE_PRODUCT_FROM_ORDER_RECEIVE,
	SELECT_ORDER_TO_EDIT,
	UNSELECT_ORDER_TO_EDIT,
	SELECT_ORDER,
	UNSELECT_ORDER
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
			let data = state.data;
			let isSameIndex = o => o._id === action.order._id;
			let index = data.findIndex(isSameIndex);
			let orders = data.slice();
			let selectedOrder = state.selectedOrder;
			orders[index] = action.order;

			if (selectedOrder)
				selectedOrder = action.order;

			return {
				...state,
				data: orders,
				selectedOrder,
				isLoading: false,
				lastUpdated: action.receivedAt
			};
		case REMOVE_PRODUCT_FROM_ORDER_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case REMOVE_PRODUCT_FROM_ORDER_RECEIVE:
			data = state.data;
			isSameIndex = o => o._id === action.order._id;
			index = data.findIndex(isSameIndex);
			orders = data.slice();
			selectedOrder = state.selectedOrder;
			orders[index] = action.order;

			if (selectedOrder)
				selectedOrder = action.order;

			return {
				...state,
				isLoading: false,
				data: orders,
				selectedOrder,
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
		case SELECT_ORDER:
			return {
				...state,
				selectedOrder: action.selectedOrder
			};
		case UNSELECT_ORDER:
			return {
				...state,
				selectedOrder: undefined
			};
		default:
			return state
	}
};

export default orders;
