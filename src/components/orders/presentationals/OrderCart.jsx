import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import ProductsList from '../../products/presentationals/ProductsList.jsx';

const emptyListTitle = 'Nenhum produto no pedido';
const emptyListText = 'Clique nos produtos do catálogo para adicioná-los no pedido';

const OrderCart = ({products, selectedOrder,
		removeProductFromOrder, anchorEl, onClose}) => (
	<Menu
		id="order-cart-menu"
		anchorEl={anchorEl}
		open={Boolean(anchorEl)}
		TransitionComponent={Fade}
		onClose={onClose}>
		<MenuItem disabled={true}>
			<Typography
				variant="display1">
				{selectedOrder.table}
			</Typography>
		</MenuItem>
		<ProductsList
			emptyListTitle={emptyListTitle}
			emptyListText={emptyListText}
			selectedOrder={selectedOrder}
			products={products}
			removeProductFromOrder={removeProductFromOrder}/>
	</Menu>
);

OrderCart.propTypes = {
	onClose: PropTypes.func.isRequired
};

export default OrderCart;