import { connect } from 'react-redux';
import { closeProductsToOrderDialog } from '../../../actions/dialogs';
import { unselectOrder } from '../../../actions/orders';
import { removeProductFromOrderRequest } from '../../../actions/orders';
import OrderProductsDialogPresentational from '../presentationals/OrderProductsDialog';

const mapStateToProps = ({dialogs, products, orders}) => ({
	isProductsToOrderDialogOpen: dialogs.productsToOrderDialog.isOpen,
	selectedOrder: orders.selectedOrder
});

const mapDispatchToProps = dispatch => ({
	handleClose: () => {
		dispatch(closeProductsToOrderDialog());
		dispatch(unselectOrder());
	},
	removeProductFromOrder: (selectedOrder, product) => 
		dispatch(removeProductFromOrderRequest(selectedOrder, product))
});

const OrderProductsDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderProductsDialogPresentational);

export default OrderProductsDialog;