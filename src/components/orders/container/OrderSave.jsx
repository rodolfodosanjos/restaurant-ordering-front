import { connect } from 'react-redux';
import { closeOrderSaveDialog, openOrderSaveDialog, openProductsToOrderDialog } from '../../../actions/dialogs';
import { createOrderRequest, fetchOrders } from '../../../actions/orders';
import { selectOrderToAddProducts } from '../../../actions/products';
import OrderSaveDialogOpenButton from '../presentationals/OrderSaveDialogOpenButton';

const mapStateToProps = ({dialogs}) => ({
	isOrderSaveDialogOpen: dialogs.orderSaveDialog.isOpen
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
		})
});

const OrderSave = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogOpenButton);

export default OrderSave;