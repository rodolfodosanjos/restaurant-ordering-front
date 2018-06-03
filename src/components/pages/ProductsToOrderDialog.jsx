import React from 'react';
import PropTypes from 'prop-types';
import Products from './Products.jsx';
import OrderIdentificationTopBar from '../orders/presentationals/OrderIdentificationTopBar.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';

const ProductsToOrderDialog = ({onClose, open, order}) => (
	<FullscreenDialog
		hideCloseButton={true}
		open={open}
		onClose={onClose}>
		<OrderIdentificationTopBar
			order={order}
			onClose={onClose} />
		<Products />
	</FullscreenDialog>
);

ProductsToOrderDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	order: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

export default ProductsToOrderDialog;