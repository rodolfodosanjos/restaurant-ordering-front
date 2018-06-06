import React from 'react';
import OrderSaveDialogOpener from '../orders/container/OrderSaveDialogOpener.jsx';
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
		<OrderSaveDialogOpener />
		<OrderProductsDialog />
	</Page>
);

export default Orders;