import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import PageMainButton from '../../commons/PageMainButton.jsx';

const OrderSaveDialogMainOpener = ({handleClickOpen}) => (
	<PageMainButton
		title="Criar pedido"
		onClick={handleClickOpen}>
		<AddIcon />
	</PageMainButton>
);

OrderSaveDialogMainOpener.propTypes = {
	handleClickOpen: PropTypes.func.isRequired
};

export default OrderSaveDialogMainOpener;