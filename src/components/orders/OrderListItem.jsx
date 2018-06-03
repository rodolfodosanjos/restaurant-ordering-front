import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const getNumbersFromString = (string) => (
	string.replace( /^\D+/g, '')
);

const OrderListItem = ({classes, order}) => (
	<ListItem>
		<Avatar>
			{getNumbersFromString(order.table)}
		</Avatar>
		<ListItemText primary={order.table} secondary={order.notes} />
	</ListItem>
);

OrderListItem.propTypes = {
	order: PropTypes.object.isRequired  
};

export default OrderListItem;