import { connect } from 'react-redux';
import { fetchOrders, deleteOrderRequest, selectOrder,
		selectOrderToEdit, removeProductFromOrderRequest } from '../../../actions/orders';
import { openOrderSaveDialog, openProductsToOrderDialog } from '../../../actions/dialogs';
import OrdersListPresentation from '../presentationals/OrdersList.jsx';

const mapStateToProps = ({orders}) => ({
	orders: orders.data,
	isLoading: orders.isLoading
});

const mapDispatchToProps = dispatch => {
	dispatch(fetchOrders())
	
	return {
		removeOrder: _id => dispatch(deleteOrderRequest(_id))
								.then(() => dispatch(fetchOrders())),
		editOrder: order => {
			dispatch(selectOrderToEdit(order));
			dispatch(openOrderSaveDialog());
		},
		orderProducts: order => {
			dispatch(selectOrder(order));
			dispatch(openProductsToOrderDialog());
		},
		removeProductFromOrder: (orderToRemoveProducts, product) => 
			dispatch(removeProductFromOrderRequest(orderToRemoveProducts, product))
				.then(() => dispatch(fetchOrders())),
	};
};

const OrdersList = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrdersListPresentation);

export default OrdersList;