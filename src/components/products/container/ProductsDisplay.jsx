import { connect } from 'react-redux';
import { fetchProducts } from '../../../actions/products';
import { orderProductRequest, fetchOrders } from '../../../actions/orders';
import ProductsDisplayPresentational from '../presentationals/ProductsDisplay';

const mapStateToProps = ({products}) => ({
	products: products.data,
	isLoading: products.isLoading,
	orderToAddProducts: products.orderToAddProducts,
	showProductsAsCards: true
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchProducts());

	return {
		orderProduct: (orderToAddProducts, product) =>
			dispatch(orderProductRequest(orderToAddProducts, product))
				.then(() => dispatch(fetchOrders()))
	};
};

const ProductsDisplay = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsDisplayPresentational);

export default ProductsDisplay;