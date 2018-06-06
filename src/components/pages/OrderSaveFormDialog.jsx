import React from 'react';
import PropTypes from 'prop-types';
import OrderSaveForm from '../orders/container/OrderSaveForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';
import FullscreenDialog from '../commons/FullscreenDialog.jsx';
import { If, Then, Else } from 'react-if';

const OrderSaveFormDialog = ({createOrder, orderToUpdate, onClose, open}) => (
	<FullscreenDialog
		open={open}
		onClose={onClose}
	>
		<Page>
			<PageTitle>
				<If condition={ Boolean(orderToUpdate) }>
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
				orderToUpdate={orderToUpdate}/>
		</Page>
	</FullscreenDialog>
);

OrderSaveFormDialog.propTypes = {
	orderToUpdate: PropTypes.object,
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	createOrder: PropTypes.func.isRequired
};

export default OrderSaveFormDialog;