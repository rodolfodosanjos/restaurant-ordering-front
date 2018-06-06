import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ProductsList from '../../products/presentationals/ProductsList.jsx';

const OrderCart = ({products, orderToAddProducts,
		removeProductFromOrder, orderToRemoveProducts,
		anchorEl, onClose}) => (
	<Menu
		id="lock-menu"
		anchorEl={anchorEl}
		open={Boolean(anchorEl)}
		TransitionComponent={Fade}
		onClose={onClose}>
		<MenuItem disabled={true}>
			<Typography
				variant="display1">
				{orderToAddProducts.table}
			</Typography>
		</MenuItem>
		<ProductsList
			orderToAddProducts={orderToAddProducts}
			orderToRemoveProducts={orderToRemoveProducts}
			products={products}
			removeProductFromOrder={removeProductFromOrder}/>
	</Menu>
);

OrderCart.propTypes = {
	onClose: PropTypes.func.isRequired
};

export default OrderCart;