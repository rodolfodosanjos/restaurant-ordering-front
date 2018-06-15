import { connect } from 'react-redux';
import { closeOrderSaveDialog, openProductsToOrderDialog } from '../../actions/dialogs';
import { createOrderRequest, updateOrderRequest, fetchOrders, unselectOrderToEdit } from '../../actions/orders';
import { selectOrder } from '../../actions/orders';
import OrderSavePresentational from './OrderSavePresentational';

const mapStateToProps = ({orders}) => ({
	orderToEdit: orders.orderToEdit
});

const mapDispatchToProps = dispatch => ({
	createOrder: order => dispatch(createOrderRequest(order))
		.then(newOrder => {
			dispatch(fetchOrders());
			dispatch(closeOrderSaveDialog());
			dispatch(selectOrder(newOrder));
			dispatch(openProductsToOrderDialog());
		}),
	updateOrder: order => dispatch(updateOrderRequest(order))
		.then(() => {
			dispatch(fetchOrders());
			dispatch(closeOrderSaveDialog());
			dispatch(unselectOrderToEdit());
		})

});

const OrderSave = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSavePresentational);

export default OrderSave;