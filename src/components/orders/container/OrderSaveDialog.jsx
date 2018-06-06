import { connect } from 'react-redux';
import { closeOrderSaveDialog } from '../../../actions/dialogs';
import OrderSaveDialogPresentational from '../presentationals/OrderSaveDialog';

const mapStateToProps = ({dialogs, orders}) => ({
	isOpen: dialogs.orderSaveDialog.isOpen,
});

const mapDispatchToProps = dispatch => ({
	onClose: () => (
		dispatch(closeOrderSaveDialog())
	)
});

const OrderSaveDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogPresentational);

export default OrderSaveDialog;