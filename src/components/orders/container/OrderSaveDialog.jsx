import { connect } from 'react-redux'
import { closeOrderSaveDialog, openOrderSaveDialog, openProductsToOrderDialog } from '../../../actions/dialogs'
import OrderSaveDialogOpenButton from '../OrderSaveDialogOpenButton'

const mapStateToProps = ({isOrderSaveDialogOpen}) => ({
	isOrderSaveDialogOpen
});

const mapDispatchToProps = dispatch => ({
	handleClickOpen: () => (
		dispatch(openOrderSaveDialog())
	),
	handleClose: () => {
		dispatch(closeOrderSaveDialog())
		dispatch(openProductsToOrderDialog())
	}
});

const OrderSaveDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogOpenButton);

export default OrderSaveDialog;