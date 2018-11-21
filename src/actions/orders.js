export const ORDERS_REQUEST = 'ORDERS_REQUEST';
export const ORDERS_RECEIVE = 'ORDERS_RECEIVE';
export const REMOVE_ORDER_REQUEST = 'REMOVE_ORDER_REQUEST';
export const REMOVE_ORDER_RECEIVE = 'REMOVE_ORDER_RECEIVE';
export const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const CREATE_ORDER_RECEIVE = 'CREATE_ORDER_RECEIVE';
export const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
export const UPDATE_ORDER_RECEIVE = 'UPDATE_ORDER_RECEIVE';
export const ORDER_PRODUCT_REQUEST = 'ORDER_PRODUCT_REQUEST';
export const ORDER_PRODUCT_RECEIVE = 'ORDER_PRODUCTRECEIVE';
export const REMOVE_PRODUCT_FROM_ORDER_REQUEST = 'REMOVE_PRODUCT_FROM_ORDER_REQUEST';
export const REMOVE_PRODUCT_FROM_ORDER_RECEIVE = 'REMOVE_PRODUCT_FROM_ORDER_RECEIVE';
export const SELECT_ORDER_TO_EDIT = 'SELECT_ORDER_TO_EDIT';
export const UNSELECT_ORDER_TO_EDIT = 'UNSELECTEDIT';
export const SELECT_ORDER = 'SELECT_ORDER';
export const UNSELECT_ORDER = 'UNSELECT_ORDER';

const PATH = 'http://192.168.1.35:5000/orders';
const corsHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

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

export const updateOrder = () => ({
	type: UPDATE_ORDER_REQUEST
});

export const updateOrderReceive = () => ({
	type: UPDATE_ORDER_RECEIVE,
	receivedAt: Date.now()
});

export const orderProduct = () => ({
	type: ORDER_PRODUCT_REQUEST
});

export const orderProductReceive = (order) => ({
	type: ORDER_PRODUCT_RECEIVE,
	order,
	receivedAt: Date.now()
});

export const removeProductFromOrder = () => ({
	type: REMOVE_PRODUCT_FROM_ORDER_REQUEST
});

export const removeProductFromOrderReceive = (order) => ({
	type: REMOVE_PRODUCT_FROM_ORDER_RECEIVE,
	order,
	receivedAt: Date.now()
});

export const selectOrderToEdit = (orderToEdit) => ({
	type: SELECT_ORDER_TO_EDIT,
	orderToEdit
});

export const unselectOrderToEdit = () => ({
	type: UNSELECT_ORDER_TO_EDIT
});

export const selectOrder = (selectedOrder) => ({
	type: SELECT_ORDER,
	selectedOrder
});

export const unselectOrder = () => ({
	type: UNSELECT_ORDER
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
				headers: corsHeaders
			}).then(
				response => {
					dispatch(createOrderReceive());
					return response.json();
				},
				error => console.log('An error occurred.', error)
			);
	}
);

export const updateOrderRequest = (order) => (
	(dispatch) => {
		dispatch(updateOrder());

		return fetch(PATH + '/' + order._id, {
				method: "PUT",
				mode: 'cors',
				body: JSON.stringify(order),
				headers: corsHeaders
			}).then(
				response => {
					dispatch(updateOrderReceive());
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
				headers: corsHeaders
			}).then(
				async response => {
					const orderUpdated = await response.json();
					dispatch(orderProductReceive(orderUpdated))}
				,
				error => console.log('An error occurred.', error)
			);
	}
);

export const removeProductFromOrderRequest = (orderToRemoveProducts, product) => (
	(dispatch) => {
		dispatch(removeProductFromOrder());

		return fetch(PATH + '/order/' + orderToRemoveProducts._id + '/product/' + product._id, {
				method: "DELETE",
				mode: 'cors',
				headers: corsHeaders
			}).then(
				async response => {
					const orderUpdated = await response.json();
					dispatch(removeProductFromOrderReceive(orderUpdated))}
				,
				error => console.log('An error occurred.', error)
			);
	}
);