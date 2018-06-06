import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard.jsx';

const ProductsCardGrid = ({products, orderToAddProducts, orderProduct}) => (
	<Grid
		container
		direction="row"
		alignItems="center"
		justify="center"
		spacing={24}>
		{products.map(product => (
			<Grid item key={product._id}>
				<ProductCard
					product={product}
					orderToAddProducts={orderToAddProducts}
					orderProduct={orderProduct} />
			</Grid>
		))}
	</Grid>
);

ProductsCardGrid.propTypes = {
	orderProduct: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired
};

export default ProductsCardGrid;