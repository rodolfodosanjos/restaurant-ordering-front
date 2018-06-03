import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import OrderListItem from './OrderListItem.jsx';

const OrdersList = ({orders}) => (
	<List>
		{orders.map(order => (
			<div key={order._id}>
				<OrderListItem order={order} />
			</div>
		))}
	</List>
);

OrdersList.propTypes = {
	orders: PropTypes.array.isRequired
};

export default OrdersList;
