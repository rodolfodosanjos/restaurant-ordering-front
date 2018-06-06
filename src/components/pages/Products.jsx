import React from 'react';
import ProductsDisplay from '../products/container/ProductsDisplay.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Products = ({classes}) => (
	<Page>
		<PageTitle>
			Produtos
		</PageTitle>
		<ProductsDisplay />
	</Page>
);

export default Products;