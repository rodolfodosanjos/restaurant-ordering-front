import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const OrderIdentificationTopBar = ({order, onClose}) => (
	<AppBar position="static" color="default">
		<Toolbar>
			<Grid
				container
				alignItems="center"
				direction="row"
				justify="space-between">
				<Grid item xs={3}></Grid>
				<Grid item xs={6}>
					<Typography
						align="center"
						variant="headline"
						color="inherit">
						{order.table}
					</Typography>
				</Grid>
				<Grid item xs={3}>
					<Button
						color="inherit"
						onClose={onClose}>
						Sair do pedido
					</Button>
				</Grid>
			</Grid>
		</Toolbar>
	</AppBar>
);

OrderIdentificationTopBar.propTypes = {
	order: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired
};

export default OrderIdentificationTopBar;