import React from 'react';
import PropTypes from 'prop-types';
import OrderSaveForm from '../orders/presentationals/OrderSaveForm.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const OrderSave = ({createOrder, orderToEdit, updateOrder}) => (
	<Page>
		<PageTitle>
			{Boolean(orderToEdit) ?
				'Editar pedido'
				: 'Criar pedido'
			}
		</PageTitle>
		<OrderSaveForm
			createOrder={createOrder}
			updateOrder={updateOrder}
			orderToEdit={orderToEdit}/>
	</Page>
);

OrderSave.propTypes = {
	orderToEdit: PropTypes.object,
	createOrder: PropTypes.func.isRequired,
	updateOrder: PropTypes.func.isRequired
};

export default OrderSave;