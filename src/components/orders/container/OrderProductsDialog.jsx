import { connect } from 'react-redux'
import { closeProductsToOrderDialog } from '../../../actions/dialogs'
import { unselectOrderToAddProducts } from '../../../actions/products'
import OrderProductsDialogPresentational from '../presentationals/OrderProductsDialog'

const mapStateToProps = ({dialogs, products}) => ({
	isProductsToOrderDialogOpen: dialogs.productsToOrderDialog.isOpen,
	orderToAddProducts: products.orderToAddProducts
});

const mapDispatchToProps = dispatch => ({
	handleClose: () => {
		dispatch(closeProductsToOrderDialog());
		dispatch(unselectOrderToAddProducts());
	}
});

const OrderProductsDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(OrderProductsDialogPresentational);

export default OrderProductsDialog;