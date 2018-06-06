import React from 'react';
import OrderSave from '../orders/container/OrderSave.jsx';
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
		<OrderSave />
		<OrderProducts />
	</Page>
);

export default Orders;