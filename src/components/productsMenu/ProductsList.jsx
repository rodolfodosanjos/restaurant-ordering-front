import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ProductListItem from './ProductListItem.jsx';

const ProductsList = ({products}) => (
	<List>
		{products.map(product => (
			<div key={product._id}>
				<ProductListItem product={product} />
			</div>
		))}
	</List>
);

ProductsList.propTypes = {
	products: PropTypes.array.isRequired
};

export default ProductsList;
