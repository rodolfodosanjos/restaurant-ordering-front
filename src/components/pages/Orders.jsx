import React from 'react';
import OrderDialogOpenButton from '../orders/OrderDialogOpenButton.jsx';
import OrdersComponent from '../orders/Orders.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Orders = () => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<OrdersComponent />
		<OrderDialogOpenButton />
	</Page>
);

export default Orders;