import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import OrderListItem from './OrderListItem.jsx';
import ListContainerMaxSize from '../../commons/ListContainerMaxSize.jsx';
import CenteredLoading from '../../commons/CenteredLoading.jsx';

const OrdersList = ({orders, isLoading, removeOrder, editOrder, orderProducts, removeProductFromOrder}) => (
	<ListContainerMaxSize>
		<CenteredLoading isLoading={isLoading}>
			<List>
				{orders.map(order => (
					<div key={order._id}>
						<OrderListItem
							removeProductFromOrder={removeProductFromOrder}
							orderProducts={orderProducts}
							removeOrder={removeOrder}
							editOrder={editOrder}
							order={order} />
					</div>
				))}
			</List>
		</CenteredLoading>
	</ListContainerMaxSize>
);

OrdersList.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	removeOrder: PropTypes.func.isRequired,
	removeProductFromOrder: PropTypes.func.isRequired,
	orderProducts: PropTypes.func.isRequired,
	editOrder: PropTypes.func.isRequired,
	orders: PropTypes.array.isRequired
};

export default OrdersList;
