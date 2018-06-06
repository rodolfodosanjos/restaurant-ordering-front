import React from 'react';
import OrderSaveDialog from '../orders/container/OrderSaveDialog.jsx';
import OrderProducts from '../orders/container/OrderProducts.jsx';
import OrdersDisplay from '../orders/container/OrdersDisplay.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Orders = () => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<OrdersDisplay />
		<OrderSaveDialog />
		<OrderProducts />
	</Page>
);

export default Orders;