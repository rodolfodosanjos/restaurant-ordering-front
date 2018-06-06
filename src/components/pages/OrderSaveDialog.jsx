import React from 'react';
import PropTypes from 'prop-types';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';
import OrderSave from '../orders/container/OrderSave.jsx';

const OrderSaveFormDialog = ({onClose, open}) => (
	<FullscreenDialog
		open={open}
		onClose={onClose}
	>
		<OrderSave />
	</FullscreenDialog>
);

OrderSaveFormDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderSaveFormDialog;