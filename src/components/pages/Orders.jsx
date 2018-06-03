import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import OrderDialogOpenButton from '../orders/OrderDialogOpenButton.jsx';
import OrdersComponent from '../orders/Orders.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const styles = theme => ({
	ordersComponent: {
		margin: '0 auto',
		maxWidth: 500
	},
	[theme.breakpoints.up('lg')]: {
		ordersComponent: {
			maxWidth: 700
		}
	}
});

const Orders = ({classes}) => (
	<Page>
		<PageTitle>
			Pedidos
		</PageTitle>
		<div className={classes.ordersComponent}>
			<OrdersComponent />
		</div>
		<OrderDialogOpenButton />
	</Page>
);

Orders.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Orders);