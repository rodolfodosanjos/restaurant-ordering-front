import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import OrderListItem from './OrderListItem.jsx';
import ListContainerMaxSize from '../../commons/ListContainerMaxSize.jsx';

const OrdersList = ({orders}) => (
	<ListContainerMaxSize>
		<List>
			{orders.map(order => (
				<div key={order._id}>
					<OrderListItem order={order} />
				</div>
			))}
		</List>
	</ListContainerMaxSize>
);

OrdersList.propTypes = {
	orders: PropTypes.array.isRequired
};

export default OrdersList;
