import React from 'react';
import OrderSaveDialog from '../orders/container/OrderSaveDialog.jsx';
import ProductsToOrder from './ProductsToOrder.jsx';
import OrdersComponent from '../orders/Orders.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Orders = () => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<OrdersComponent />
		<OrderSaveDialog />
		<ProductsToOrder />
	</Page>
);

export default Orders;