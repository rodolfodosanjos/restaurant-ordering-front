import React from 'react';
import OrderListItem from '../orders/OrderListItem.jsx';

export default () => (
	<div>
		<OrderListItem order={{
			table: 'Mesa 25',
			notes: 'Sem pepino'
		}}/>
	</div>
);