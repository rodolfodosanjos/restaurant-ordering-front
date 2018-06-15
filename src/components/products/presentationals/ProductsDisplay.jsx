import React from 'react';
import PropTypes from 'prop-types';
import ProductsCardGrid from '../presentationals/ProductsCardGrid.jsx';
import ProductsList from '../presentationals/ProductsList.jsx';
import CenteredLoading from '../../commons/CenteredLoading.jsx';

const emptyListTitle = 'Nenhum produto cadastrado'
const emptyListText = 'Converse com o responsável pelo sistema para ele criar um catálogo'

const ProductsDisplay = ({products, showProductsAsCards, isLoading,
		selectedOrder, orderProduct, removeProductFromOrder}) => (
	<CenteredLoading isLoading={isLoading}>
		{showProductsAsCards ?
			<ProductsCardGrid
				emptyListTitle={emptyListTitle}
				emptyListText={emptyListText}
				selectedOrder={selectedOrder}
				products={products}
				removeProductFromOrder={removeProductFromOrder}
				orderProduct={orderProduct} />
			:
			<ProductsList
				emptyListTitle={emptyListTitle}
				emptyListText={emptyListText}
				selectedOrder={selectedOrder}
				products={products}
				removeProductFromOrder={removeProductFromOrder}
				orderProduct={orderProduct} />
		}
	</CenteredLoading>
);

ProductsDisplay.propTypes = {
	showProductsAsCards: PropTypes.bool.isRequired,
	orderProduct: PropTypes.func,
	products: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired
};

export default ProductsDisplay;