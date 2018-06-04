import { connect } from 'react-redux'
import { closeOrderSaveDialog, openOrderSaveDialog, openProductsToOrderDialog } from '../../../actions/dialogs'
import OrderSaveDialogOpenButton from '../OrderSaveDialogOpenButton'

const mapStateToProps = ({dialogs}) => ({
	isOrderSaveDialogOpen: dialogs.isOrderSaveDialogOpen 
});

const mapDispatchToProps = dispatch => ({
	handleClickOpen: () => (
		dispatch(openOrderSaveDialog())
	),
	handleClose: () => {
		dispatch(closeOrderSaveDialog())
	},
	saveOrder: (order) => {
		dispatch(closeOrderSaveDialog())
		dispatch(openProductsToOrderDialog())
	}
});

const OrderSave = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogOpenButton);

export default OrderSave;