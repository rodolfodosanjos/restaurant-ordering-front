export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';

const PATH = 'http://192.168.1.35:5000/products';

export const requestProducts = () => ({
	type: PRODUCTS_REQUEST
});

export const receiveProducts = (json) => ({
	type: PRODUCTS_RECEIVE,
	payload: json,
	receivedAt: Date.now()
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