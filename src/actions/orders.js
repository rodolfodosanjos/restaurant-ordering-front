export const ORDERS_REQUEST = 'ORDERS_REQUEST';
export const ORDERS_RECEIVE = 'ORDERS_RECEIVE';
export const REMOVE_ORDER_REQUEST = 'REMOVE_ORDER_REQUEST';
export const REMOVE_ORDER_RECEIVE = 'REMOVE_ORDER_RECEIVE';
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_RECEIVE = 'CREATE_ORDER_RECEIVE';
export const ORDER_PRODUCT_REQUEST = 'ORDER_PRODUCT_REQUEST';
export const ORDER_PRODUCT_RECEIVE = 'ORDER_PRODUCTRECEIVE';

const PATH = 'http://localhost:5000/orders';

export const requestOrders = () => ({
	type: ORDERS_REQUEST
});

export const receiveOrders = (json) => ({
	type: ORDERS_RECEIVE,
	payload: json,
	receivedAt: Date.now()
});

export const removeOrder = () => ({
	type: REMOVE_ORDER_REQUEST
});

export const removeOrderReceive = () => ({
	type: REMOVE_ORDER_RECEIVE,
	receivedAt: Date.now()
});

export const createOrder = () => ({
	type: CREATE_ORDER_REQUEST
});

export const createOrderReceive = () => ({
	type: CREATE_ORDER_RECEIVE,
	receivedAt: Date.now()
});

export const orderProduct = () => ({
	type: ORDER_PRODUCT_REQUEST
});

export const orderProductReceive = () => ({
	type: ORDER_PRODUCT_RECEIVE,
	receivedAt: Date.now()
});

export const fetchOrders = () => (
	(dispatch) => {
		dispatch(requestOrders());

		return fetch(PATH, {mode: 'cors'})
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveOrders(json))
			);
	}
);

export const deleteOrderRequest = (_id) => (
	(dispatch) => {
		dispatch(removeOrder());

		return fetch(PATH + '/' + _id, {
				method: "DELETE",
				mode: 'cors'
			}).then(
				response => dispatch(removeOrderReceive()),
				error => console.log('An error occurred.', error)
			);
	}
);

export const createOrderRequest = (order) => (
	(dispatch) => {
		dispatch(createOrder());

		return fetch(PATH, {
				method: "POST",
				mode: 'cors',
				body: JSON.stringify(order),
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				}
			}).then(
				response => {
					dispatch(createOrderReceive());
					return response.json();
				},
				error => console.log('An error occurred.', error)
			);
	}
);

export const orderProductRequest = (orderToAddProducts, product) => (
	(dispatch) => {
		dispatch(orderProduct());

		return fetch(PATH + '/order/' + orderToAddProducts._id + '/product/' + product._id, {
				method: "PUT",
				mode: 'cors',
				headers: {
				  'Accept': 'application/json',
				  'Content-Type': 'application/json'
				},
			}).then(
				response => dispatch(orderProductReceive()),
				error => console.log('An error occurred.', error)
			);
	}
);
