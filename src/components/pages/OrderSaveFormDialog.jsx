import React from 'react';
import PropTypes from 'prop-types';
import OrderSaveForm from '../orders/OrderSaveForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';

const OrderSaveFormDialog = ({saveOrder, orderToUpdate, onClose, open}) => (
	<FullscreenDialog
		open={open}
		onClose={onClose}
	>
		<Page>
			<PageTitle>
				{ orderToUpdate ?
					'Editar pedido'
					:
					'Criar pedido'
				}
			</PageTitle>
			<OrderSaveForm
				saveOrder={saveOrder}
				orderToUpdate={orderToUpdate}/>
		</Page>
	</FullscreenDialog>
);

OrderSaveFormDialog.propTypes = {
	orderToUpdate: PropTypes.object,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderSaveFormDialog;