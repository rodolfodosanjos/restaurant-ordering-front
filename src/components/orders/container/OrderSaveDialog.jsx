import { connect } from 'react-redux';
import { closeOrderSaveDialog, openOrderSaveDialog } from '../../../actions/dialogs';
import OrderSaveDialogOpenButton from '../presentationals/OrderSaveDialogOpenButton';

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
)(OrderSaveDialogOpenButton);

export default OrderSave;