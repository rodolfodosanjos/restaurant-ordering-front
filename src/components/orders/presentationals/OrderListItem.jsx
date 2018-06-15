import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import OrderedProductsCollapsedList from './OrderedProductsCollapsedList.jsx';

const getNumbersFromString = (string) => (
	string.replace( /^\D+/g, '')
);

const OrderListItem = ({order, removeOrder, editOrder, orderProducts, removeProductFromOrder}) => (
	<div>
		<ListItem>
			<Avatar>
				{getNumbersFromString(order.table)}
			</Avatar>
			<ListItemText primary={order.table} secondary={order.notes} />
			<ListItemSecondaryAction>
				<Tooltip title="Adicionar produtos">
					<IconButton
						color="primary"
						onClick={orderProducts.bind(undefined, order)}
						aria-label="Adicionar produtos">
						<ShoppingCartIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Editar pedido">
					<IconButton
						onClick={editOrder.bind(undefined, order)}
						aria-label="Editar pedido">
						<EditIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title="Remover pedido">
					<IconButton
						onClick={removeOrder.bind(undefined, order._id)}
						aria-label="Remover pedido">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</ListItemSecondaryAction>
		</ListItem>
		{ (order && order.products && order.products.length > 0) ?
			<OrderedProductsCollapsedList
				removeProductFromOrder={removeProductFromOrder}
				products={order.products}
				order={order} />
			: <Typography
				variant="subheading">
				Nenhum produto pedido
			</Typography>
		}
	</div>
);

OrderListItem.propTypes = {
	order: PropTypes.object.isRequired,
	removeProductFromOrder: PropTypes.func.isRequired,
	removeOrder: PropTypes.func.isRequired,
	orderProducts: PropTypes.func.isRequired,
	editOrder: PropTypes.func.isRequired
};

export default OrderListItem;