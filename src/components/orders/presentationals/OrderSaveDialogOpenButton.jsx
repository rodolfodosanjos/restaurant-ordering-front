import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import OrderSaveDialog from '../../pages/OrderSaveDialog.jsx';
import PageMainButton from '../../commons/PageMainButton.jsx';

const OrderSaveDialogOpenButton = ({createOrder, updateOrder,
	isOrderSaveDialogOpen, handleClickOpen, handleClose, orderToEdit}) => (
	<div>
		<PageMainButton
			title="Criar pedido"
			onClick={handleClickOpen}>
			<AddIcon />
		</PageMainButton>
		<OrderSaveDialog 
			onClose={handleClose}
			updateOrder={updateOrder}
			createOrder={createOrder}
			orderToEdit={orderToEdit}
			open={isOrderSaveDialogOpen}/>
	</div>
);

OrderSaveDialogOpenButton.propTypes = {
	isOrderSaveDialogOpen: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	updateOrder: PropTypes.func.isRequired,
	createOrder: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default OrderSaveDialogOpenButton;