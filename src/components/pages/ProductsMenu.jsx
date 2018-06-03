import React from 'react';
import ProductListItem from '../productsMenu/ProductListItem.jsx';

export default () => (
	<div>
		<ProductListItem product={{
			_id: 123,
			imageSrc: 'https://portal.minervafoods.com/files/styles/blog_full_page/public/como_fazer_hamburguer_caseiro.jpg?itok=CyGvXnuY',
			name: 'Hamburguer com batata frita',
			category: 'hamburguer',
			description: 'Hamburguer com queijo, carne e batata frita',
			price: 40
		}} />
	</div>
);