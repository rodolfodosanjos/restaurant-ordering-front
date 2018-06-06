import React from 'react';
import PropTypes from 'prop-types';
import OrderSaveForm from '../orders/presentationals/OrderSaveForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';
import OrderSave from './OrderSave.jsx';

const OrderSaveFormDialog = ({createOrder, orderToEdit, updateOrder, onClose, open}) => (
	<FullscreenDialog
		open={open}
		onClose={onClose}
	>
		<OrderSave 
			createOrder={createOrder}
			orderToEdit={orderToEdit}
			updateOrder={updateOrder}/>
	</FullscreenDialog>
);

OrderSaveFormDialog.propTypes = {
	orderToEdit: PropTypes.object,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	createOrder: PropTypes.func.isRequired,
	updateOrder: PropTypes.func.isRequired
};

export default OrderSaveFormDialog;