import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/products';
import { orderProductRequest, removeProductFromOrderRequest, fetchOrders } from '../../../actions/orders';
import ProductsDisplayPresentational from '../presentationals/ProductsDisplay';

const mapStateToProps = ({products, orders}) => ({
	products: products.data,
	isLoading: products.isLoading,
	selectedOrder: orders.selectedOrder,
	showProductsAsCards: true
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchProducts());

	return {
		orderProduct: (selectedOrder, product) =>
			dispatch(orderProductRequest(selectedOrder, product)),
		removeProductFromOrder: (orderToRemoveProducts, product) => 
			dispatch(removeProductFromOrderRequest(orderToRemoveProducts, product))
				.then(() => dispatch(fetchOrders())),
	};
};

const ProductsDisplay = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsDisplayPresentational);

export default ProductsDisplay;