import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import OrderSaveFormDialog from '../pages/OrderSaveFormDialog.jsx';
import PageMainButton from '../commons/PageMainButton.jsx';

const OrderSaveDialogOpenButton = ({isOrderSaveDialogOpen, handleClickOpen, handleClose}) => (
	<div>
		<PageMainButton
			title="Criar pedido"
			onClick={handleClickOpen}>
			<AddIcon />
		</PageMainButton>
		<OrderSaveFormDialog 
			onClose={handleClose}
			open={isOrderSaveDialogOpen}/>
	</div>
);

OrderSaveDialogOpenButton.propTypes = {
	isOrderSaveDialogOpen: PropTypes.bool.isRequired,
	handleClickOpen: PropTypes.func.isRequired,
	handleClose: PropTypes.func.isRequired
};

export default OrderSaveDialogOpenButton;