import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import OrderSaveDialog from '../../pages/OrderSaveDialog.jsx';
import PageMainButton from '../../commons/PageMainButton.jsx';

const OrderSaveDialogOpenButton = ({isOrderSaveDialogOpen, handleClickOpen, handleClose}) => (
	<div>
		<PageMainButton
			title="Criar pedido"
			onClick={handleClickOpen}>
			<AddIcon />
		</PageMainButton>
		<OrderSaveDialog 
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