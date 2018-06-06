import { connect } from 'react-redux';
import { closeOrderSaveDialog } from '../../../actions/dialogs';
import { unselectOrderToEdit } from '../../../actions/orders';
import OrderSaveDialogPresentational from '../presentationals/OrderSaveDialog';

const mapStateToProps = ({dialogs, orders}) => ({
	isOpen: dialogs.orderSaveDialog.isOpen,
});

const mapDispatchToProps = dispatch => ({
	onClose: () => {
		dispatch(closeOrderSaveDialog());
		dispatch(unselectOrderToEdit());
	}
});

const OrderSaveDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogPresentational);

export default OrderSaveDialog;