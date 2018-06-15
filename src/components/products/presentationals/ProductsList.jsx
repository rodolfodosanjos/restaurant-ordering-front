import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ProductListItem from './ProductListItem.jsx';
import ListContainerMaxSize from '../../commons/ListContainerMaxSize.jsx';
import EmptyListMessage from '../../commons/EmptyListMessage.jsx';

const ProductsList = ({products, selectedOrder, orderProduct,
		removeProductFromOrder, emptyListTitle,
		emptyListText}) => (
	<ListContainerMaxSize>
		<List>
			<EmptyListMessage
				list={products}
				emptyListTitle={emptyListTitle}
				emptyListText={emptyListText}>
				<div>
					{products.map(product => (
						<ProductListItem
							key={product._id}
							product={product}
							selectedOrder={selectedOrder}
							removeProductFromOrder={removeProductFromOrder} />
					))}
				</div>
			</EmptyListMessage>
		</List>
	</ListContainerMaxSize>
);

ProductsList.propTypes = {
	products: PropTypes.array.isRequired
};

export default ProductsList;
