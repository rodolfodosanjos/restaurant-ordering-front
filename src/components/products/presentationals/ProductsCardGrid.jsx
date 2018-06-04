import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard.jsx';

const ProductsCardGrid = ({products}) => (
	<Grid container spacing={24}>
		{products.map(product => (
			<Grid item key={product._id}>
				<ProductCard product={product} />
			</Grid>
		))}
	</Grid>
);

ProductsCardGrid.propTypes = {
	products: PropTypes.array.isRequired
};

export default ProductsCardGrid;