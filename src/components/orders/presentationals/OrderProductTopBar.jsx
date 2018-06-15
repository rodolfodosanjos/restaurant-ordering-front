import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import OrderCart from './OrderCart.jsx';

class OrderProductTopBar extends React.Component {
	state = {
		openCard: false,
		anchorEl: null
	};
	
	handleClick = event => {
	  this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
	  this.setState({ anchorEl: null });
	};

	render() {
		const { selectedOrder,
			onClose, removeProductFromOrder } = this.props;
		const { anchorEl } = this.state;

		return (
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
								color="primary">
								{selectedOrder ? selectedOrder.table : null}
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Button
								color="primary"
								aria-owns={anchorEl ? 'simple-menu' : null}
								aria-haspopup="true"
								onClick={this.handleClick}>
								<ShoppingCartIcon />
								Ver pedido
							</Button>
							<OrderCart
								anchorEl={anchorEl}
								selectedOrder={selectedOrder}
								products={selectedOrder.products}
								onClose={this.handleClose}
								removeProductFromOrder={removeProductFromOrder}/>
							<Button
								color="inherit"
								onClick={onClose}>
								<CloseIcon />
								Sair
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

OrderProductTopBar.propTypes = {
	onClose: PropTypes.func.isRequired
};

export default OrderProductTopBar;