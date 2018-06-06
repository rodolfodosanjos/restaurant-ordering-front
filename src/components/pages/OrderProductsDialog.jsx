import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products.jsx';
import OrderIdentificationTopBar from '../orders/presentationals/OrderIdentificationTopBar.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';

const OrderProductsDialog = ({handleClose, isProductsToOrderDialogOpen, orderToAddProducts}) => (
	<FullscreenDialog
		hideCloseButton={true}
		open={isProductsToOrderDialogOpen}
		onClose={handleClose}>
		<OrderIdentificationTopBar
			orderToAddProducts={orderToAddProducts}
			onClose={handleClose} />
		<Products />
	</FullscreenDialog>
);

OrderProductsDialog.propTypes = {
	isProductsToOrderDialogOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default OrderProductsDialog;