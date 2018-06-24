import React from 'react';
import OrderSaveDialogMainOpener from '../orders/container/OrderSaveDialogMainOpener.jsx';
import OrderSaveDialog from '../orders/container/OrderSaveDialog.jsx';
import OrderProductsDialog from '../orders/container/OrderProductsDialog.jsx';
import OrdersList from '../orders/container/OrdersList.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const emptyListTitle = 'Nenhum pedido cadastrado';
const emptyListText = 'Clique no botão azul abaixo para pedir';

const Orders = () => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<OrdersList 
			emptyListTitle={emptyListTitle}
			emptyListText={emptyListText}/>
		<OrderSaveDialogMainOpener />
		<OrderSaveDialog />
		<OrderProductsDialog />
	</Page>
);

export default Orders;