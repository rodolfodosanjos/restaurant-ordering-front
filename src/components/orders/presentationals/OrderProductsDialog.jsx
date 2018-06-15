import React from 'react';
import PropTypes from 'prop-types';
import Products from '../../pages/Products.jsx';
import OrderProductTopBar from './OrderProductTopBar.jsx';
import FullscreenDialog from '../../commons/FullscreenDialog.jsx';

const OrderProductsDialog = ({handleClose, isProductsToOrderDialogOpen,
		selectedOrder, removeProductFromOrder}) => (
	<FullscreenDialog
		hideCloseButton={true}
		open={isProductsToOrderDialogOpen}
		onClose={handleClose}>
		<div>
			{ isProductsToOrderDialogOpen ?
				<div>
					<OrderProductTopBar
						removeProductFromOrder={removeProductFromOrder}
						selectedOrder={selectedOrder}
						onClose={handleClose} />
					<Products />
				</div>
				: null
			}
		</div>
	</FullscreenDialog>
);

OrderProductsDialog.propTypes = {
	isProductsToOrderDialogOpen: PropTypes.bool.isRequired,
	removeProductFromOrder: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default OrderProductsDialog;