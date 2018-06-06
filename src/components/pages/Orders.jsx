import React from 'react';
import OrderSaveDialogMainOpener from '../orders/container/OrderSaveDialogMainOpener.jsx';
import OrderSaveDialog from '../orders/container/OrderSaveDialog.jsx';
import OrderProductsDialog from '../orders/container/OrderProductsDialog.jsx';
import OrdersDisplay from '../orders/container/OrdersDisplay.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Orders = () => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<OrdersDisplay />
		<OrderSaveDialogMainOpener />
		<OrderSaveDialog />
		<OrderProductsDialog />
	</Page>
);

export default Orders;