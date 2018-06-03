import React from 'react';
import OrdersListItem from '../orders/OrdersListItem.jsx';

export default () => (
	<div>
		<OrdersListItem order={{
			table: 'Mesa 25',
			notes: 'Sem pepino'
		}}/>
	</div>
);