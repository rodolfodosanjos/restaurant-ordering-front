import { connect } from 'react-redux';
import { openOrderSaveDialog } from '../../../actions/dialogs';
import OrderSaveDialogMainOpenerPresentational from '../presentationals/OrderSaveDialogMainOpener';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
	handleClickOpen: () => (
		dispatch(openOrderSaveDialog())
	)
});

const OrderSaveDialogMainOpener = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderSaveDialogMainOpenerPresentational);

export default OrderSaveDialogMainOpener;