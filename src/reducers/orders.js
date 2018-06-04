import {
	REQUEST_ORDERS,
	RECEIVE_ORDERS
} from '../actions/orders';

const orders = (
	state = {
		isFetching: false,
		data: []
	}, action
) => {
	switch (action.type) {
		case REQUEST_ORDERS:
			return Object.assign({}, state, {
				isFetching: true,
			});
		case RECEIVE_ORDERS:
			console.log('action.orders', action.orders);
			return Object.assign({}, state, {
				isFetching: false,
				data: action.orders,
				lastUpdated: action.receivedAt
			});
		default:
			return state
	}
};

export default orders;
