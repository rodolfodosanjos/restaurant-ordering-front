import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ProductsList from '../../products/presentationals/ProductsList.jsx';

class OrderedProductsCollapsedList extends React.Component {
	state = { open: false };

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { products, order, removeProductFromOrder } = this.props;

		return (
			<div>
				<ListItem button onClick={this.handleClick}>
					<ListItemText primary="Ver produtos" />
					{this.state.open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={this.state.open} timeout="auto" unmountOnExit>
					<ProductsList
						products={products}
						orderToRemoveProducts={order}
						removeProductFromOrder={removeProductFromOrder}/>
				</Collapse>
			</div>
		);
	}
}

OrderedProductsCollapsedList.propTypes = {
	order: PropTypes.object.isRequired,
	removeProductFromOrder: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired
};

export default OrderedProductsCollapsedList;