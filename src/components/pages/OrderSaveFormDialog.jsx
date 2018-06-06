import React from 'react';
import PropTypes from 'prop-types';
import OrderSaveForm from '../orders/presentationals/OrderSaveForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';
import { If, Then, Else } from 'react-if';

const OrderSaveFormDialog = ({createOrder, orderToEdit, updateOrder, onClose, open}) => (
	<FullscreenDialog
		open={open}
		onClose={onClose}
	>
		<Page>
			<PageTitle>
				<If condition={ Boolean(orderToEdit) }>
					<Then>
						Editar pedido
					</Then>
					<Else>
						Criar pedido
					</Else>
				</If>
			</PageTitle>
			<OrderSaveForm
				createOrder={createOrder}
				updateOrder={updateOrder}
				orderToEdit={orderToEdit}/>
		</Page>
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