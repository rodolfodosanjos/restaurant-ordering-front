export const REQUEST_ORDERS = 'REQUEST_ORDER';
export const SAVE_ORDER = 'SAVE_ORDER';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS'

export const requestOrders = () => ({
	type: REQUEST_ORDERS
});

export const receiveOrders = (json) => ({
	type: RECEIVE_ORDERS,
	orders: json,
	receivedAt: Date.now()
});

export const fetchOrders = (subreddit) => (
	(dispatch) => {
		dispatch(requestOrders())

		return fetch('http://localhost:5000/orders', {mode: 'cors'})
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveOrders(json))
			);
	}
);
