import React from 'react';
import OrderSave from '../orders/container/OrderSave.jsx';
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
		<OrderSave />
		<ProductsToOrder />
	</Page>
);

export default Orders;