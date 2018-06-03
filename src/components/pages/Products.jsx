import React from 'react';
import ProductsComponent from '../products/Products.jsx';
import PageTitle from '../commons/PageTitle.jsx';
import Page from '../commons/Page.jsx';

const Products = ({classes}) => (
	<Page>
		<PageTitle>
			Produtos
		</PageTitle>
		<ProductsComponent />
	</Page>
);

export default Products;