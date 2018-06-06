import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import PageMainButton from '../../commons/PageMainButton.jsx';

const OrderSaveDialogMainOpener = ({handleClickOpen}) => (
	<div>
		<PageMainButton
			title="Criar pedido"
			onClick={handleClickOpen}>
			<AddIcon />
		</PageMainButton>
	</div>
);

OrderSaveDialogMainOpener.propTypes = {
	handleClickOpen: PropTypes.func.isRequired
};

export default OrderSaveDialogMainOpener;