import { connect } from 'react-redux'
import { closeProductsToOrderDialog } from '../../../actions/dialogs'
import { unselectOrderToAddProducts } from '../../../actions/products'
import ProductsToOrderDialog from '../../pages/ProductsToOrderDialog'

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

const ProductsToOrder = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsToOrderDialog);

export default ProductsToOrder;