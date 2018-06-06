export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';
export const SELECT_ORDER_TO_ADD_PRODUCTS = 'SELECT_ORDER_TO_ADD_PRODUCTS';
export const UNSELECT_ORDER_TO_ADD_PRODUCTS = 'UNSELECT_ORDER_TO_ADD_PRODUCTS';

const PATH = 'http://localhost:5000/products';

export const requestProducts = () => ({
	type: PRODUCTS_REQUEST
});

export const receiveProducts = (json) => ({
	type: PRODUCTS_RECEIVE,
	payload: json,
	receivedAt: Date.now()
});

export const selectOrderToAddProducts = (orderToAddProducts) => ({
	type: SELECT_ORDER_TO_ADD_PRODUCTS,
	orderToAddProducts
});

export const unselectOrderToAddProducts = () => ({
	type: UNSELECT_ORDER_TO_ADD_PRODUCTS
});

export const fetchProducts = () => (
	(dispatch) => {
		dispatch(requestProducts());

		return fetch(PATH, {mode: 'cors'})
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json =>
				dispatch(receiveProducts(json))
			);
	}
);