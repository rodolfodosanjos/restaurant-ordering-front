import React from 'react';
import PropTypes from 'prop-types';
import FullscreenDialog from '../../commons/FullscreenDialog.jsx';
import OrderSave from '../../pages/OrderSave.jsx';

const OrderSaveDialog = ({onClose, isOpen}) => (
	<FullscreenDialog
		open={isOpen}
		onClose={onClose}
	>
		<OrderSave />
	</FullscreenDialog>
);

OrderSaveDialog.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderSaveDialog;