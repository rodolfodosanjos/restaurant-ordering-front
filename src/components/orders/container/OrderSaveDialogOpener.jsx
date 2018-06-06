import { connect } from 'react-redux';
import { closeOrderSaveDialog, openOrderSaveDialog } from '../../../actions/dialogs';
import OrderSaveDialogOpenerPresentational from '../presentationals/OrderSaveDialogOpener';

const mapStateToProps = ({dialogs, orders}) => ({
	isOrderSaveDialogOpen: dialogs.orderSaveDialog.isOpen,
});

const mapDispatchToProps = dispatch => ({
	handleClickOpen: () => (
		dispatch(openOrderSaveDialog())
	),
	handleClose: () => (
		dispatch(closeOrderSaveDialog())
	)
});

const OrderSave = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogOpenerPresentational);

export default OrderSave;