import React from 'react';
import PropTypes from 'prop-types';
import ProductsCardGrid from '../presentationals/ProductsCardGrid.jsx';
import ProductsList from '../presentationals/ProductsList.jsx';
import CenteredLoading from '../../commons/CenteredLoading.jsx';

const ProductsDisplay = ({products, showProductsAsCards, isLoading, orderToAddProducts, orderProduct}) => (
	<CenteredLoading isLoading={isLoading}>
		{showProductsAsCards ?
			<ProductsCardGrid
				orderToAddProducts={orderToAddProducts}
				products={products}
				orderProduct={orderProduct} />
			:
			<ProductsList
				orderToAddProducts={orderToAddProducts}
				products={products}
				orderProduct={orderProduct} />
		}
	</CenteredLoading>
);

ProductsDisplay.propTypes = {
	showProductsAsCards: PropTypes.bool.isRequired,
	orderProduct: PropTypes.func.isRequired,
	products: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default ProductsDisplay;