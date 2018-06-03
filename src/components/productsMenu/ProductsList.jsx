import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ProductListItem from './ProductListItem.jsx';
import ListContainerMaxSize from '../commons/ListContainerMaxSize.jsx';

const ProductsList = ({products}) => (
	<ListContainerMaxSize>
		<List>
			{products.map(product => (
				<div key={product._id}>
					<ProductListItem product={product} />
				</div>
			))}
		</List>
	</ListContainerMaxSize>
);

ProductsList.propTypes = {
	products: PropTypes.array.isRequired
};

export default ProductsList;
