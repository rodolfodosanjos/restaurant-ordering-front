import { connect } from 'react-redux';
import { closeOrderSaveDialog, openOrderSaveDialog, openProductsToOrderDialog } from '../../../actions/dialogs';
import { createOrderRequest, updateOrderRequest, fetchOrders, unselectOrderToEdit } from '../../../actions/orders';
import { selectOrderToAddProducts } from '../../../actions/products';
import OrderSaveDialogOpenButton from '../presentationals/OrderSaveDialogOpenButton';

const mapStateToProps = ({dialogs, orders}) => ({
	isOrderSaveDialogOpen: dialogs.orderSaveDialog.isOpen,
	orderToEdit: orders.orderToEdit
});

const mapDispatchToProps = dispatch => ({
	handleClickOpen: () => (
		dispatch(openOrderSaveDialog())
	),
	handleClose: () => (
		dispatch(closeOrderSaveDialog())
	),
	createOrder: order => dispatch(createOrderRequest(order))
		.then(newOrder => {
			dispatch(fetchOrders());
			dispatch(closeOrderSaveDialog());
			dispatch(selectOrderToAddProducts(newOrder));
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
)(OrderSaveDialogOpenButton);

export default OrderSave;