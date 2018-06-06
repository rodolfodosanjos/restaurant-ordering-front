import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import OrderedProductsCollapsedList from './OrderedProductsCollapsedList.jsx';

const getNumbersFromString = (string) => (
	string.replace( /^\D+/g, '')
);

const OrderListItem = ({order, removeOrder, editOrder}) => (
	<div>
		<ListItem>
			<Avatar>
				{getNumbersFromString(order.table)}
			</Avatar>
			<ListItemText primary={order.table} secondary={order.notes} />
			<ListItemSecondaryAction>
				<Tooltip title="Remover pedido">
					<IconButton onClick={removeOrder.bind(undefined, order._id)} aria-label="Remover pedido">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Editar pedido">
					<IconButton onClick={editOrder.bind(undefined, order)} aria-label="Editar pedido">
						<EditIcon />
					</IconButton>
				</Tooltip>
			</ListItemSecondaryAction>
		</ListItem>
		<OrderedProductsCollapsedList products={order.products} />
	</div>
);

OrderListItem.propTypes = {
	order: PropTypes.object.isRequired,
	removeOrder: PropTypes.func.isRequired,
	editOrder: PropTypes.func.isRequired
};

export default OrderListItem;